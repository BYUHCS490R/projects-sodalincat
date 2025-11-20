

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector("input[name='gender']:checked");

    if (!fullname || !email) {
        alert('Please enter your full name and email.');
        return;
    }

    if (!age || age < 18) {
        alert("You must be 18 or older.");
        return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password,
        age: age,
        gender:gender.value,
    };

    console.log(formData);


    const xhr = new XMLHttpRequest();
    xhr.open("GET","response.json",true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error Submitting form.");
        }
    };
    xhr.send();
});

