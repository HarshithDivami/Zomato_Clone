document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        // Simple validation
        if (email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Redirect to index.html
        window.location.href = 'index.html';
    });
});