document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For simplicity, I will be just displaying a message instead of actually submitting the form.
    document.getElementById('message').textContent = `Thank you for signing up, ${username}!`;
});
