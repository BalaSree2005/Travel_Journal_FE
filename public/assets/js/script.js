// const headerContent = `

// <header id="nav-bar">

//         <nav>
//             <img src="./assetes/images/vector-logo.jpg" alt="Company Logo" id="company-logo">
//             <marquee><strong>Travel Beyond Borders! Share your adventures and find your next dream destination!</strong></marquee>
//             <a href="index.html">Home</a>
//             <a href="/">Get Started</a>
//             <a href="/signup">Sign In</a>
//             <a href="dashboard.html">Account Overview</a>
//             <a href="aboutus.html">Our Story</a>
//         </nav>
//     </header>
// `;

// const footerContent = `
//     <footer>
//         <div class="foot">
//             <h6>&copy; Copyright Reserved..!</h6>
//         </div>
//         <div class="images" id="logos">
//             <img src="./assetes/images/icon-twitter.svg" alt="Twitter Logo">
//             <img src="./assetes/images/icon-facebook.svg" alt="Facebook Logo">
//             <img src="./assetes/images/icon-instagram.svg" alt="Instagram Logo">
//         </div>
//     </footer>
// `;

// document.getElementById('header').innerHTML = headerContent;
// document.getElementById('footer').innerHTML = footerContent;

////register page
document.addEventListener('DOMContentLoaded', function () {
    // Form and button selection
    const customerForm = document.getElementById('customerForm');
    const agentForm = document.getElementById('agentForm');
    const customerButton = document.getElementById('customerButton');
    const agentButton = document.getElementById('agentButton');
    const addPhoneButton = document.getElementById('addPhone');
    const phoneNumbersContainer = document.getElementById('phoneNumbersContainer');

    // Hide buttons function
    function hideButtons() {
        customerButton.style.display = 'none';
        agentButton.style.display = 'none';
    }

    // Show customer form and hide agent form and buttons
    customerButton.addEventListener('click', function () {
        hideButtons();
        customerForm.style.display = 'block';
        agentForm.style.display = 'none';
        clearErrorMessages();
    });

    // Show agent form and hide customer form and buttons
    agentButton.addEventListener('click', function () {
        hideButtons();
        agentForm.style.display = 'block';
        customerForm.style.display = 'none';
        clearErrorMessages();
    });

    // Add phone number input dynamically
    addPhoneButton.addEventListener('click', function () {
        const newPhoneInput = document.createElement('input');
        newPhoneInput.type = 'tel';
        newPhoneInput.className = 'phone';
        newPhoneInput.name = 'phone';
        newPhoneInput.maxLength = 10; // Ensure only 10 digits are entered
        phoneNumbersContainer.appendChild(newPhoneInput);
        phoneNumbersContainer.appendChild(document.createElement('br'));
    });

    // Customer form validation and submission
    const customerFormSubmit = document.getElementById('customerSubmit');
    if (customerFormSubmit) {
        customerFormSubmit.addEventListener('click', function (event) {
            event.preventDefault();
            clearErrorMessages();
            if (validateCustomerForm()) {
                customerForm.submit(); // Submit the form if valid
            }
        });
    }

    // Agent form validation and submission
    const agentFormSubmit = document.getElementById('agentSubmit');
    if (agentFormSubmit) {
        agentFormSubmit.addEventListener('click', function (event) {
            event.preventDefault();
            clearErrorMessages();
            if (validateAgentForm()) {
                agentForm.submit(); // Submit the form if valid
            }
        });
    }

    // Validation for customer form
    function validateCustomerForm() {
        let isValid = true;

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const phoneElements = document.querySelectorAll('.phone');
        const city = document.getElementById('city').value.trim();

        // Name validation: Only alphabets and spaces
        if (username === '' || !/^[a-zA-Z\s]+$/.test(username)) {
            displayErrorMessage('error-username', 'Username must contain only alphabets and spaces');
            isValid = false;
        }

        // Email validation: Must be a Gmail address
        if (!validateEmail(email)) {
            displayErrorMessage('error-email', 'Email must be a valid Gmail address');
            isValid = false;
        }

        // Password validation: Exactly 6 characters
if (password.length !== 6) {
    displayErrorMessage('error-password', 'Password must be exactly 6 characters long');
    isValid = false;
}


        // Phone validation: 10 digits and no duplicate numbers
        const phoneNumbers = Array.from(phoneElements).map(input => input.value.trim());
        if (!validatePhoneNumbers(phoneNumbers)) {
            displayErrorMessage('error-phone', 'Phone numbers must be 10 digits and unique');
            isValid = false;
        }

        if (city === '') {
            displayErrorMessage('error-city', 'City is required');
            isValid = false;
        }

        return isValid;
    }

    // Validation for agent form
    function validateAgentForm() {
        let isValid = true;

        const agentName = document.getElementById('agentName').value.trim();
        const agentEmail = document.getElementById('agentEmail').value.trim();
        const agentPassword = document.getElementById('agentPassword').value.trim();
        const agentId = document.getElementById('agentId').value.trim();

        // Name validation: Only alphabets and spaces
        if (agentName === '' || !/^[a-zA-Z\s]+$/.test(agentName)) {
            displayErrorMessage('error-agentName', 'Agent Name must contain only alphabets and spaces');
            isValid = false;
        }

        // Email validation: Must be a Gmail address
        if (!validateEmail(agentEmail)) {
            displayErrorMessage('error-agentEmail', 'Email must be a valid Gmail address');
            isValid = false;
        }

        // Password validation:  6 characters
        if (agentPassword.length !== 6) {
            displayErrorMessage('error-agentPassword', 'Password must be at least 6 characters long');
            isValid = false;
        }

        if (agentId === '') {
            displayErrorMessage('error-agentId', 'Agent ID is required');
            isValid = false;
        }

        return isValid;
    }

    // Helper function to display error message
    function displayErrorMessage(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    // Clear all error messages
    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach((el) => {
            el.innerText = '';
            el.style.display = 'none';
        });
    }

    // Email validation: Must be Gmail
    function validateEmail(email) {
        const re = /^[^\s@]+@gmail\.com$/; // Restrict to Gmail addresses only
        return re.test(email);
    }

    // Phone validation: 10 digits and unique phone numbers
    function validatePhoneNumbers(phoneNumbers) {
        const phoneRegex = /^[0-9]{10}$/;
        const uniquePhones = new Set(phoneNumbers);
        
        return phoneNumbers.every(phone => phoneRegex.test(phone)) && uniquePhones.size === phoneNumbers.length;
    }







    
   ////// Login Page Logic







   
//    const loginForm = document.getElementById('loginForm');

//    if (loginForm) {
//        loginForm.addEventListener('submit', function (event) {
//            event.preventDefault(); // Prevent the default form submission
   
//            const name = document.getElementById('college').value.trim(); // Get the name input
//            const email = document.getElementById('mail').value.trim();
//            const password = document.getElementById('password').value.trim();
   
//            // Basic validation
//            if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
//                alert("Please enter a valid name (only alphabets and spaces)");
//            } else if (email === "" || !validateEmail(email)) {
//                alert("Please enter a valid email");
//            } else if (password.length < 6) {
//                alert("Password must be at least 6 characters long");
//            } else {
//                // Validate credentials against stored data
//                validateCredentials(name, email, password);
//            }
//        });
//    }
   
//    // Email validation function
//    function validateEmail(email) {
//        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//        return re.test(email);
//    }
   
   // Store data temporarily using sessionStorage
//    function storeUserData(name, email, password, phone, city) {
//        sessionStorage.setItem('name', name);
//        sessionStorage.setItem('email', email);
//        sessionStorage.setItem('password', password); // Store the password as well
//        sessionStorage.setItem('phone', phone);
//        sessionStorage.setItem('city', city);
//    }
   
   // Function to validate credentials
//    function validateCredentials(name, email, password) {
//        const storedName = sessionStorage.getItem('name');
//        const storedEmail = sessionStorage.getItem('email');
//        const storedPassword = sessionStorage.getItem('password');
   
//        // Log the retrieved values for debugging
//        console.log('Stored credentials:', { storedName, storedEmail, storedPassword });
//        console.log('Entered credentials:', { name, email, password });
   
//        // Check if the credentials match
//        if (name === storedName && email === storedEmail && password === storedPassword) {
//            alert("Login successful!");
//            // Redirect to dashboard
//            window.location.href = './dashboard.html';
//        } else {
//            alert("Invalid credentials, please try again.");
//        }
//    }

   
   
});

// profile

// Profile.js
document.addEventListener('DOMContentLoaded', () => {
    const editCustomerButton = document.getElementById('editCustomer');
    const editCustomerForm = document.getElementById('editCustomerForm');
    
    const editAgentButton = document.getElementById('editAgent');
    const editAgentForm = document.getElementById('editAgentForm');

    // Toggle customer edit form
    editCustomerButton.addEventListener('click', () => {
        editCustomerForm.style.display = editCustomerForm.style.display === 'none' ? 'block' : 'none';
    });

    // Toggle agent edit form
    editAgentButton.addEventListener('click', () => {
        editAgentForm.style.display = editAgentForm.style.display === 'none' ? 'block' : 'none';
    });

    // Handle customer form submission
    editCustomerForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(editCustomerForm);
        const response = await fetch(editCustomerForm.action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Customer profile updated successfully!');
            location.reload(); // Reload the page to show updated data
        } else {
            const errorMessage = await response.text();
            alert(`Error updating customer profile: ${errorMessage}`);
        }
    });

    // Handle agent form submission
    editAgentForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(editAgentForm);
        const response = await fetch(editAgentForm.action, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Agent profile updated successfully!');
            location.reload(); // Reload the page to show updated data
        } else {
            const errorMessage = await response.text();
            alert(`Error updating agent profile: ${errorMessage}`);
        }
    });
});
