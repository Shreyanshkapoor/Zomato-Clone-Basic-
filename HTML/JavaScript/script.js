document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    const searchBox = document.querySelector(".hero input");
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            alert("Searching for: " + searchBox.value);
        }
    });

    // Login Button Interaction
    const loginButton = document.querySelector("ul li:nth-child(3) a");
    loginButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Login functionality is under development.");
    });

    // Sign-up Button Redirect
    const signUpButton = document.querySelector("ul li:nth-child(4) a");
    signUpButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "signup.html"; // Redirect to a signup page (create one if needed)
    });
});
