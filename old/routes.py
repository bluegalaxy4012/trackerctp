from datetime import datetime
from main import load_models, predict_time_to_reach
from flask import Blueprint, request, jsonify

routing_profile = Blueprint('routing_profile', __name__)

@routing_profile.route('/predict', methods=['POST'])
def predict():
    data = request.json
    trip_id = data['trip_id']
    d1 = data['d1']
    d2 = data['d2']
    model, model_forward = load_models(trip_id)
    if model is None or model_forward is None:
        return jsonify({"error": "Model not found."}), 404

    current_datetime = datetime.now()
    predicted_time = float(predict_time_to_reach(model, model_forward, d1, d2, current_datetime))
    
    return jsonify({"predicted_time": predicted_time})

if __name__ == '__main__':
    pass

    """
    - pentru flask local
    mode = input("host flask(F): ").strip().upper()
    if mode == 'F':
        app.run(debug=True)
    else:
        print("Invalid mode.")
        sys.exit(1)
    """
