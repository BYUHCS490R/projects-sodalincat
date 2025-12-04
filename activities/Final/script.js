// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("visit-form");
    if (!form) return; // only run on the form page

    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop normal submit

        // Simple validation: check required fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("Please fill in your name and email before sending.");
            return;
        }

        // At this point the "processing" is successful.
        // You can imagine sending data to a server here.

        form.reset();
        form.style.display = "none";       // hide the form
        messageBox.style.display = "block"; // show success message
    });
});
