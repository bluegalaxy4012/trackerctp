import pandas as pd
import numpy as np
from tensorflow import keras
from datetime import datetime
import sys
import os
from flask import Flask, Blueprint
from flask_cors import CORS

#peak_hours = {7, 8, 14, 15, 16, 17, 18}

hour_congestion_index = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 3,
    "7": 7.75,
    "8": 8.75,
    "9": 5.25,
    "10": 5.25,
    "11": 5.75,
    "12": 5.75,
    "13": 6,
    "14": 7,
    "15": 8.25,
    "16": 9.5,
    "17": 8.75,
    "18": 7,
    "19": 4,
    "20": 3,
    "21": 0,
    "22": 0,
    "23": 0
}

routing_profile = Blueprint('routing_profile', __name__)

def create_app():
    app = Flask(__name__)
    CORS(app, origins="https://bluegalaxy4012.github.io")
    
    app.register_blueprint(routing_profile)
    return app

def load_model(trip_id):
    model_path = f"models/{trip_id}_model.keras"
    if os.path.exists(model_path):
        return keras.models.load_model(model_path)
    return None

def predict_time_to_reach(model, d1, d2, current_datetime):
    if d1 is None or d2 is None:
        return 0

    if d2 - d1 < 0.02 or d2 - d1 > 20:
        return 0

    time_elapsed = 0
    current_traffic_index = hour_congestion_index[str(current_datetime.hour)]
    if current_datetime.weekday() < 5:
        current_traffic_index = max(0, current_traffic_index - 3)
    max_iter = 25

    while d2 > d1 and max_iter > 0:
        input_data = np.array([[d2, current_traffic_index]])
        distance_2mins_ago = model.predict(input_data)[0][0]
        if distance_2mins_ago < d1:
            time_elapsed += (d2 - d1) / (d2 - distance_2mins_ago) * 120
            break
        else:
            time_elapsed += 120
            d2 = distance_2mins_ago
        max_iter -= 1
    return time_elapsed
