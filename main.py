from flask import Flask, render_template, session, redirect, request
from dotenv import load_dotenv
import os

app = Flask(__name__)

@app.route("/firebase_config")
def firebase_config():
    firebase_config = {
        "apiKey": os.environ.get("FIREBASE_API_KEY"),
        "authDomain": os.environ.get("FIREBASE_AUTH_DOMAIN"),
        "databaseURL": os.environ.get("FIREBASE_DATABASE_URL"),
        "projectId": os.environ.get("FIREBASE_PROJECT_ID"),
        "storageBucket": os.environ.get("FIREBASE_STORAGE_BUCKET"),
        "messagingSenderId": os.environ.get("FIREBASE_MESSAGING_SENDER_ID"),
        "appId": os.environ.get("FIREBASE_APP_ID"),
        "measurementId": os.environ.get("FIREBASE_MEASUREMENT_ID")
    }
    return firebase_config

# Set a secret key for session support
app.secret_key = 'your_secret_key'

@app.route("/set_session", methods=['POST'])
def set_session():
    user = request.json
    session['user'] = user
    return 'User data stored in session.'


@app.route("/")
def root_route():
    return render_template('template.html')

@app.route("/signup")
def signup():
    return render_template('signup.html')

@app.route("/signin")
def signin():
    return render_template('signin.html')

@app.route("/signout")
def signout():
    # Clear the session
    session.clear()
    return redirect('/')

@app.route("/signedin")
def signedin():
    # Retrieve user data from session
    user = session.get('user')
    print(user)
    if user:
        return render_template('signedin.html', user=user)
    else:
        # Redirect to sign-in page if user data is not available
        return redirect('/signin')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)