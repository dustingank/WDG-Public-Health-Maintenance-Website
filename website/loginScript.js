// for checking the login information
const login = document.getElementById("loginForm");
const ErrorMessage = document.getElementById("loginErrorMessage");
const button = document.getElementById("SubmitButton");

// for the shaking animation
const userNameSection = document.getElementById("UserNameSection");
const passwordSection = document.getElementById("PasswordSection");

button.addEventListener("click",(e) =>{
    e.preventDefault();
    const name = login.userName.value;
    const password = login.password.value;

    if (name === "user" && password === "123ABC") {
        alert("You have successfully logged in.");
        location.reload();
    } else if (name == "Admain" && password === "Admain") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        ErrorMessage.style.opacity = 1;
        
        userNameSection.classList.add("error");
        passwordSection.classList.add("error");

        setTimeout(function() {
            userNameSection.classList.remove('error');
            passwordSection.classList.remove("error");
        }, 300);
    }
})