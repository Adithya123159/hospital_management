document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            // 1. Prevent the default form submission
            event.preventDefault();

            // 2. Get the user's name
            const name = document.getElementById('fullName').value;

            // 3. Redirect to the success page
            // We pass the name in the URL (e.g., success.html?name=John)
            window.location.href = `success.html?name=${encodeURIComponent(name)}`;
        });
    }
});