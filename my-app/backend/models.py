from . import db

class User(db.Model):
    __tablename__ = "user"
    
    id = db.Column(db.Integer, primary_key=True)
    FirstName = db.Column(db.String(80), nullable=False)
    LastName = db.Column(db.String(80), nullable=False)
    Email = db.Column(db.String(80), unique=True, nullable=False)
    Password = db.Column(db.String(100), unique=True, nullable=False)
    
    def __init__(self, first_name, last_name, email, password):
        self.FirstName = first_name
        self.LastName = last_name
        self.Email = email
        self.Password = password