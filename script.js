document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // Display success message
        const responseDiv = document.getElementById('formResponse');
        responseDiv.innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your message has been sent.</div>`;
        responseDiv.style.display = 'block';

        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        // Display error message
        const responseDiv = document.getElementById('formResponse');
        responseDiv.innerHTML = `<div class="alert alert-danger">Please fill in all fields.</div>`;
        responseDiv.style.display = 'block';
    }
});