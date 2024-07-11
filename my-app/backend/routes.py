from flask import jsonify, current_app as app, request
from .models import User, db

# @app.route('/')
# def index():
#     return jsonify({"message": "Hello from Flask!"})

# @app.route('/api/users', methods=['GET'])
# def get_users():
#     users = User.query.all()
#     return jsonify([user.name for user in users])

@app.route('/login/signup', methods=['POST'])
def login():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')
    
    if not all([first_name, last_name, email, password]):
        return jsonify({"error": "All fields are required"}), 400

    try:
        new_user = User(first_name=first_name, last_name=last_name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User added successfully!"}), 201
    except Exception as e:
        app.logger.error(f"Error adding user: {e}")
        return jsonify({"error": "Failed to add user"}), 500