# Firebase Authentication Template

A comprehensive Flask-based template for implementing Firebase Authentication with a modern JavaScript frontend.

## Features

- Email/Password authentication
- Secure password hashing
- Session management
- Responsive UI with modals
- Firebase configuration management
- User session persistence
- Error handling

## Prerequisites

- Python 3.x
- Node.js (for npm packages)
- Firebase account
- Modern web browser

## Installation

1. **Clone the Repository**
```bash
git clone https://github.com/barandev/Firebase-Authentication-Template.git
cd Firebase-Authentication-Template
```

2. **Setup Firebase Project**
  - Create a project in [Firebase Console](https://console.firebase.google.com)
  - Enable Email/Password authentication
  - Copy your Firebase configuration
  - Create `.env` file with your Firebase credentials:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_DATABASE_URL=your_database_url
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

3. **Install Dependencies**
```bash
pip install -r requirements.txt
```

4. **Run Application**
```bash
python main.py
```

5. **Access Application**
- Open browser at `http://localhost:8080`

## Customization Guide

### Frontend
- Modify HTML templates in `/templates`
- Update styles in `/static/css/style.css`
- Customize JavaScript logic in `/static/js`

### Backend
- Edit route handlers in `main.py`
- Add new Flask routes as needed
- Implement additional security measures

### Firebase Features
- Add Firestore integration
- Implement Cloud Messaging
- Enable other Firebase services

## Security Considerations

- Environment variables for sensitive data
- Password hashing implementation
- Session management
- CSRF protection
- Secure authentication flow

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

![GitHub release (latest by date)](https://img.shields.io/github/v/release/barandev/Firebase-Authentication-Template?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/barandev/Firebase-Authentication-Template?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/barandev/Firebase-Authentication-Template?style=for-the-badge)
