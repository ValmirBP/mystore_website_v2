
// Register page verifications

function registerUser() {
    // Get form values
    var mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');

    // Add event listeners to input fields
    fname.addEventListener('blur', validateInput);
    lname.addEventListener('blur', validateInput);
    email.addEventListener('blur', validateInput);
    password.addEventListener('blur', validateInput);
    cpassword.addEventListener('blur', validateInput);

    // Validate form fields
    if (fname.value === '') {
        alert('Please enter your first name');
        fname.focus();
        return false;
    }

    if (lname.value === '') {
        alert('Please enter your last name');
        lname.focus();
        return false;
    }

    if (email.value === '' || !mailRegex.test(email.value)) {
        alert('Please enter your email address');
        email.focus();
        return false;
    }

    if (password.value === '') {
        alert('Please enter a password');
        password.focus();
        return false;
    }

    if (cpassword.value === '') {
        alert('Please confirm your password');
        cpassword.focus();
        return false;
    }

    if (password.value !== cpassword.value) {
        alert("Passwords do not match");
        password.focus();
        return false;
    }
    return true;
}

function validateInput(e) {
    // Get target input field
    var input = e.target;

    // Check if input is valid
    if (!input.checkValidity()) {
        input.classList.add("red");
    } else {
        input.classList.remove("red");
    }
}
