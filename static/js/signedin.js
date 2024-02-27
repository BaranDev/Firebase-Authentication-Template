/* signedin.js */
window.onload = () => {
    // Retrieve user info from session storage
    const userJson = sessionStorage.getItem('user');
    if (userJson) {
        const user = JSON.parse(userJson);
        // Display user info on the page
        document.getElementById('user-info').innerText = `Signed in as: ${user.email}`;
    } else {
        // Handle case when user info is not found
        alert('User info not found in session storage');
        // Redirect to sign-in page
        window.location.href = '/signin';
    }
};