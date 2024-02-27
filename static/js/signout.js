// Sign out button
document.getElementById('signout-button').addEventListener('click', async () => {
    // Sign out user
    await fetch('/signout');
    // Clear session storage
    sessionStorage.clear();
    // Redirect to sign-in page
    alert('Successfully signed out');
    window.location.href = '/';
});