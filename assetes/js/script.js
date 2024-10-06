

const footerContent = `
<footer>
        <div class="foot">
            <h6>&copy; Copyright Reserved..!</h6>
        </div>
        <div class="images" id="logos">
            <img src="./assetes/images/icon-twitter.svg" alt="Twitter Logo">
            <img src="./assetes/images/icon-facebook.svg" alt="Facebook Logo">
            <img src="./assetes/images/icon-instagram.svg" alt="Instagram Logo">
        </div>
    </footer>`;


    document.getElementById('footer').innerHTML = footerContent;












///////////register page

document.addEventListener('DOMContentLoaded', function () {
    // Registration Page Logic
    const form = document.getElementById('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            // Get form values
            const name = document.getElementById('college').value.trim();
            const email = document.getElementById('mail').value.trim();
            const password = document.getElementById('password').value;
            const phone = document.getElementById('phone').value;
            const city = document.getElementById('city').value.trim();

            // Validation logic
            if (name === "") {
                alert("Name is required");
                event.preventDefault();
            } else if (email === "" || !validateEmail(email)) {
                alert("Please enter a valid email");
                event.preventDefault();
            } else if (password.length < 6) {
                alert("Password must be at least 6 characters long");
                event.preventDefault();
            } else if (phone === "" || !/^\d{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number");
                event.preventDefault();
            } else if (city === "") {
                alert("City is required");
                event.preventDefault();
            } else {
                // Store user data temporarily in sessionStorage
                storeUserData(name, email, password, phone, city);
                alert("Form submitted successfully!");
                // Redirect to dashboard
                window.location.href = './dashboard.html';
            }
        });
    }

    // Login Page Logic
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            const email = document.getElementById('mail').value.trim();
            const password = document.getElementById('password').value.trim();

            // Basic validation
            if (email === "" || !validateEmail(email)) {
                alert("Please enter a valid email");
            } else if (password.length < 6) {
                alert("Password must be at least 6 characters long");
            } else {
                // Validate credentials against stored data
                validateCredentials(email, password);
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Store data temporarily using sessionStorage
    function storeUserData(name, email, password, phone, city) {
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password); // Store the password as well
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('city', city);
    }

    // Function to validate credentials
    function validateCredentials(email, password) {
        const storedEmail = sessionStorage.getItem('email');
        const storedPassword = sessionStorage.getItem('password');

        // Log the retrieved values for debugging
        console.log('Stored credentials:', { storedEmail, storedPassword });
        console.log('Entered credentials:', { email, password });

        // Check if the credentials match
        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            // Redirect to dashboard
            window.location.href = './dashboard.html';
        } else {
            alert("Invalid credentials, please try again.");
        }
    }
});









/////////// Dashboard
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from sessionStorage
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const city = sessionStorage.getItem('city');

    // Display the user data
    document.getElementById('userName').textContent = name || 'Not available';
    document.getElementById('userEmail').textContent = email || 'Not available';
    document.getElementById('userPhone').textContent = phone || 'Not available';
    document.getElementById('userCity').textContent = city || 'Not available';

    // Debugging: Log the retrieved data
    console.log('User data retrieved:', { name, email, phone, city });
});


///// experience from

// document.getElementById('experience-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const name = document.getElementById('name').value;
//     const destination = document.getElementById('destination').value;
//     const experience = document.getElementById('experience').value;
//     const image = document.getElementById('image').files[0];

//     console.log('Name:', name);
//     console.log('Destination:', destination);
//     console.log('Experience:', experience);
//     if (image) {
//         console.log('Image:', image.name);
//     }

//     // Here you can add code to send the data to your server or API
// });
