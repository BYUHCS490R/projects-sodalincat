

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("visit-form");
    if (!form) return; 

    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("Please fill in your name and email before sending.");
            return;
        }

      

        form.reset();
        form.style.display = "none";       
        messageBox.style.display = "block"; 
    });
});
