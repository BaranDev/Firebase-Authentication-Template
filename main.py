"""
# Firebase Authentication Template | Flask Backend
=================================================
This is the main server file. It handles:
  - Serving the Firebase config to the frontend (keeping API keys out of JS)
  - Flask session management for authenticated users
  - Routing between sign-in, sign-up, signed-in, and sign-out pages

Customize this file to add your own routes, middleware, or database logic.
"""

from flask import Flask, render_template, session, redirect, request
from dotenv import load_dotenv
import os

# Load environment variables from .env file
# Make sure you've copied .env.example → .env and filled in your values
load_dotenv()

app = Flask(__name__)

# Secret key for Flask session cookies.
# IMPORTANT: Change this in production! Set FLASK_SECRET_KEY in your .env file.
# Generate one with: python -c "import secrets; print(secrets.token_hex(32))"
app.secret_key = os.environ.get("FLASK_SECRET_KEY", os.urandom(24))


# ──────────────────────────────────────────────
# Firebase Config Endpoint
# ──────────────────────────────────────────────
# The frontend fetches this to initialize the Firebase SDK.
# This keeps your config in .env instead of hardcoding it in JavaScript.
@app.route("/firebase_config")
def firebase_config():
    config = {
        "apiKey": os.environ.get("FIREBASE_API_KEY"),
        "authDomain": os.environ.get("FIREBASE_AUTH_DOMAIN"),
        "databaseURL": os.environ.get("FIREBASE_DATABASE_URL"),
        "projectId": os.environ.get("FIREBASE_PROJECT_ID"),
        "storageBucket": os.environ.get("FIREBASE_STORAGE_BUCKET"),
        "messagingSenderId": os.environ.get("FIREBASE_MESSAGING_SENDER_ID"),
        "appId": os.environ.get("FIREBASE_APP_ID"),
        "measurementId": os.environ.get("FIREBASE_MEASUREMENT_ID"),
    }
    return config


# ──────────────────────────────────────────────
# Session Management
# ──────────────────────────────────────────────
# After the user signs in on the frontend, we store minimal user info
# in a server-side Flask session so protected pages can verify the user.
@app.route("/set_session", methods=["POST"])
def set_session():
    data = request.json
    # Only store the fields you actually need because we want to avoid storing tokens or metadata
    session["user"] = {
        "uid": data.get("uid"),
        "email": data.get("email"),
    }
    return "User data stored in session."


# ──────────────────────────────────────────────
# Page Routes
# ──────────────────────────────────────────────
# Add your own routes below. Each route renders an HTML template from /templates.

@app.route("/")
def root_route():
    return render_template("template.html")


@app.route("/signup")
def signup():
    return render_template("signup.html")


@app.route("/signin")
def signin():
    return render_template("signin.html")


@app.route("/signout")
def signout():
    # Clear the server-side session
    session.clear()
    return redirect("/")


@app.route("/signedin")
def signedin():
    # Retrieve user data from session
    user = session.get("user")
    if user:
        return render_template("signedin.html", user=user)
    else:
        # Redirect to sign-in page if no session exists
        return redirect("/signin")


# ──────────────────────────────────────────────
# Run the Development Server
# ──────────────────────────────────────────────
# In production, use a proper WSGI server like gunicorn:
#   gunicorn main:app --bind 0.0.0.0:8080
if __name__ == "__main__":
    debug_mode = os.environ.get("FLASK_DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=8080, debug=debug_mode)