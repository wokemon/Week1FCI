# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
 
time = datetime.datetime.now()
 
# Initializing flask app
app = Flask(__name__)
 
 
# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"Alec", 
        "Age":"22",
        "Date":time, 
        "programming":"React + Flask"
        }
 
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)