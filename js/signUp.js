const email = document.getElementById("email-sign-up");
const password = document.getElementById("password-sign-up");
const reEnterPassword = document.getElementById("re-enter-password-sign-up");
const signUpBtn = document.querySelector(".register-btn");

signUpBtn.addEventListener("click", signUp);

function signUp(e) {
    let isEverithingOk = false;
    //change border if an input field is empty
    [email, password, reEnterPassword].forEach(input => {
        if (input.value == "") {
            input.style.border = "2px solid red";
            isEverithingOk = false;
        } else {
            input.style.border = "1px solid gray";
            isEverithingOk = true;
        }
    });

    //check both password values
    if (password.value !== reEnterPassword.value) {
        alert("Please Re-Enter password correctly!");
        password.style.border = "2px solid red";
        reEnterPassword.style.border = "2px solid red";
    }
}