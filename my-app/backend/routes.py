from flask import jsonify, current_app as app, request
from .models import User, db

@app.route('/')
def index():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.name for user in users])

@app.route('/login/signup', method=['POST'])
def login():
    data = request.get_json()
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password = data.get('password')
    
    if not email:
        return jsonify({"error" : "Email is required"}), 400
    elif not password:
        return jsonify({"error" : "Password is required"}), 400
    elif not first_name:
        return jsonify({"error" : "First name is required"}), 400
    elif not last_name:
        return jsonify({"error" : "Last name is required"}), 400
    
    new_user = User(first_name=first_name,last_name=last_name,email=email, password=password)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User added successfully!"}), 201