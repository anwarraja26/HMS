// JavaScript to switch between forms based on selected radio button
const hospitalLogin = document.querySelector('.hospital');
const adminLogin = document.querySelector('.admin');
const radioButtons = document.querySelectorAll('input[name="login-type"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'hospital') {
            hospitalLogin.classList.add('active');
            adminLogin.classList.remove('active');
        } else {
            hospitalLogin.classList.remove('active');
            adminLogin.classList.add('active');
        }
    });
});

// Function to reset the form
function resetForm() {
    document.getElementById('login-form').reset();
    document.getElementById('admin-form').reset();
}

// Handle hospital login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password === "1234") {
        switch (email) {
            case "ghchennai@gmail.com":
                window.location.href = "hospital1.html";
                break;
            case "ghcoimbatore@gmail.com":
                window.location.href = "hospital2.html";
                break;
            case "ghsalem@gmail.com":
                window.location.href = "hospital3.html";
                break;
            case "ghmadurai@gmail.com":
                window.location.href = "hospital4.html";
                break;
            case "ghtiruvallur@gmail.com":
                window.location.href = "hospital5.html";
                break;
            default:
                alert("Invalid email or password");
        }
    } else {
        alert("Invalid email or password");
    }
});
