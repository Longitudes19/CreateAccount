function registerAccount() {
    
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var agreeTerms = document.getElementById('agreeTerms').checked;

    
    if (!fullName || !email || !password || !agreeTerms) {
        
        alert('Please fill in all required fields.');
    } else {
        
        
        sendRegistrationDataToServer(fullName, email, password);
    }
}


function sendRegistrationDataToServer(fullName, email, password) {
    
    console.log('Sending registration data to server:', { fullName, email, password });

    
    alert('Account registered successfully!');
}

function registerWithGoogle() {
    var userEmail = prompt("Select the email to register");

    
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '&#128064;'; // Closed eye
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '&#128065;'; // Open eye
    }
}



