from main import create_app
from routes import routing_profile

app = create_app()
app.register_blueprint(routing_profile)
