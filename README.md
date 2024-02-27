# Firebase Authentication Template

This template repository provides a basic setup for implementing Firebase Authentication with Flask and JavaScript.

## Usage

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Setup Firebase Project**:
   - Create a Firebase project on the Firebase console.
   - Enable Email/Password authentication in the Firebase console.
   - Retrieve your Firebase config details.
   - Set up your `.env` file with Firebase config details:
     ```
     FIREBASE_API_KEY=your_api_key
     FIREBASE_AUTH_DOMAIN=your_auth_domain
     FIREBASE_DATABASE_URL=your_database_url
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     FIREBASE_APP_ID=your_app_id
     FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

3. **Install Dependencies**: Run `pip install -r requirements.txt` to install Python dependencies.

4. **Run the Flask App**: Execute `python main.py` to start the Flask application.

5. **Access the Application**: Navigate to `http://localhost:8080` in your web browser to access the application.

## Customization

- **HTML Templates**: Customize HTML templates in the `templates` directory according to your application requirements.
- **JavaScript Logic**: Modify JavaScript files (`signup.js`, `signin.js`, `signout.js`, `signedin.js`) to add additional functionality or customize existing behavior.
- **Firebase Features**: Extend the functionality by integrating other Firebase features like Firestore, Cloud Messaging, etc.

## Repository Owner

- **GitHub Username**: [barandev](https://github.com/barandev)
- **Repository Name**: [Firebase-Authentication-Template](https://github.com/barandev/Firebase-Authentication-Template)

  
[![GitHub stars](https://img.shields.io/github/stars/barandev/Firebase-Authentication-Template)](https://github.com/barandev/Firebase-Authentication-Template/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/barandev/Firebase-Authentication-Template)](https://github.com/barandev/Firebase-Authentication-Template/network)
[![GitHub license](https://img.shields.io/github/license/barandev/Firebase-Authentication-Template)](https://github.com/barandev/Firebase-Authentication-Template/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/barandev/Firebase-Authentication-Template)](https://github.com/barandev/Firebase-Authentication-Template/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/barandev/Firebase-Authentication-Template)](https://github.com/barandev/Firebase-Authentication-Template/pulls)

