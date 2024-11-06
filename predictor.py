import pandas as pd
import numpy as np
import keras
from datetime import datetime
import sys
import os
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app, origins=["https://bluegalaxy4012.github.io"])

"""
nu merge api key prin .env

load_dotenv()

@app.route('/config')
def get_config():
    return jsonify({
        'googleMapsApiKey': GOOGLE_MAPS_API_KEY
    })
"""


peak_hours = {8, 9, 14, 15, 16, 17, 18}

def load_data(csv_path):
    data = pd.read_csv(csv_path)
    data['current_time'] = pd.to_datetime(data['current_time'], errors='coerce')
    data = data.dropna(subset=['current_time'])
    data = data.sort_values('current_time')
    data['distance_from_start_45s_ago'] = data['distance_from_start'] - data['distance_difference']
    data['is_peakhour'] = data['current_time'].dt.hour.isin(peak_hours).astype(int)
    data['is_weekend'] = data['current_time'].dt.dayofweek >= 5
    X = data[['distance_from_start', 'is_peakhour', 'is_weekend']]
    y = data['distance_from_start_45s_ago']
    #print(f"Number of lines of data: {len(data)}")
    return X, y

def create_and_train_model(X, y):
    model = keras.models.Sequential([
        keras.layers.Dense(10, activation='relu', input_shape=(3,)),
        keras.layers.Dense(10, activation='relu'),
        keras.layers.Dense(1)
    ])
    model.compile(optimizer='adam', loss='mse')
    model.fit(X, y, epochs=50, batch_size=16, verbose="1")
    return model

def save_model(model, trip_id):
    model_path = f"/home/bluegalaxy4012/trackerctp/{trip_id}_model.keras"
    model.save(model_path)

def load_model(trip_id):
    model_path = f"/home/bluegalaxy4012/trackerctp/{trip_id}_model.keras"
    if os.path.exists(model_path):
        return keras.models.load_model(model_path)
    return None

def train_model_for_trip(csv_path, trip_id, model=None):
    X, y = load_data(csv_path)
    if model is None:
        model = create_and_train_model(X, y)
    else:
        model.fit(X, y, epochs=50, batch_size=10, verbose=1)
    save_model(model, trip_id)
    return model

def predict_time_to_reach(model, d1, d2, current_datetime):
    if d2 - d1 < 0.015:
        return 0

    time_elapsed = 0
    current_distance = d2
    peak = 1 if current_datetime.hour in peak_hours else 0
    weekday = 1 if current_datetime.weekday() < 5 else 0
    max_iter = 50

    while current_distance > d1 and max_iter > 0:
        input_data = np.array([[current_distance, peak, weekday]])
        distance_45_seconds_ago = model.predict(input_data)[0][0]
        if distance_45_seconds_ago < d1:
            time_elapsed += (current_distance - d1) / (current_distance - distance_45_seconds_ago) * 45
            break
        else:
            time_elapsed += 45
            current_distance = distance_45_seconds_ago
        max_iter -= 1
    return time_elapsed

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 predictor.py <trip_id>")
        sys.exit(1)

    trip_id = sys.argv[1]
    csv_path = f'vehicle_data/{trip_id}.csv'
    model = load_model(trip_id)
    
    if model is None:
        print("No existing model found. Training a new model.")
        model = train_model_for_trip(csv_path, trip_id)
    else:
        retrain = input("Model exists. Train it again? (Y/N): ").strip().lower()
        if retrain == 'y':
            model = train_model_for_trip(csv_path, trip_id, model)

    while True:
        try:
            d1 = float(input("Enter the vehicle distance from starting point: "))
            d2 = float(input("Enter the destination's distance from starting point: "))
            if d2 < d1:
                raise ValueError("d2 should be greater than d1.")
            current_datetime = datetime.now()
            predicted_time = predict_time_to_reach(model, d1, d2, current_datetime)
            print(f"Predicted time to reach {d1} from {d2} for trip_id {trip_id}: {predicted_time:.2f} seconds")
        except ValueError as e:
            print(f"Invalid input: {e}")
        continue_input = input("Enter another d1 and d2? (Y/N): ").strip().lower()
        if continue_input != 'y':
            break


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    trip_id = data['trip_id']
    d1 = data['d1']
    d2 = data['d2']
    model = load_model(trip_id)
    if model is None:
        return jsonify({"error": "Model not found."}), 404

    current_datetime = datetime.now()
    predicted_time = float(predict_time_to_reach(model, d1, d2, current_datetime))
    
    return jsonify({"predicted_time": predicted_time})

if __name__ == '__main__':
    app.run()
    """
    mode = input("host flask or run main(F/M): ").strip().upper()
    if mode == 'F':
        app.run(debug=True)
    elif mode == 'M':
        main()
    else:
        print("Invalid mode.")
        sys.exit(1)
    """
