// Function to clear previous error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

// Function to check if an input is not empty
function isNotEmpty(input) {
    return input.value.trim() !== '';
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.value.trim());
}

// Function to check if a radio button group has a selected option
function hasCheckedOption(name) {
    const options = document.getElementsByName(name);
    return Array.from(options).some(option => option.checked);
}

// Function to check if a dropdown has a selected value
function isSelected(select) {
    return select.value !== '';
}

// Function to show error messages
function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
}

// Function to validate the entire form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    clearErrors();
    let valid = true;

    // Validate name
    const nameInput = document.getElementById('name');
    if (!isNotEmpty(nameInput)) {
        showError(nameInput, 'Name cannot be empty.');
        valid = false;
    }

    // Validate email
    const emailInput = document.getElementById('email');
    if (!isValidEmail(emailInput)) {
        showError(emailInput, 'Invalid email format.');
        valid = false;
    }

    // Validate breakfast choice (radio buttons)
    if (!hasCheckedOption('breakfast')) {
        showError(document.getElementById('eggs'), 'Please select a breakfast option.');
        valid = false;
    }

    // Validate custom ID
    const customIdInput = document.getElementById('customId');
    const customIdPattern = /^[A-Z]{3}-[0-9]{4}$/;
    if (!customIdPattern.test(customIdInput.value.trim())) {
        showError(customIdInput, 'Custom ID must be in the format ABC-1234.');
        valid = false;
    }

    // Validate dropdown (if applicable)
    const dobInput = document.getElementById('dob');
    if (!isNotEmpty(dobInput)) {
        showError(dobInput, 'Date of Birth cannot be empty.');
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        document.getElementById('registrationForm').submit();
    }
}

// Attach event listener to form submission
document.getElementById('registrationForm').addEventListener('submit', validateForm);
