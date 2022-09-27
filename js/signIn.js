const email = document.getElementById("email-sign-in");
const password = document.getElementById("password-sign-in");
const signInBtn = document.querySelector(".register-btn");

signInBtn.addEventListener("click", signIn);

function signIn(e){
    //change border if an input field is empty
    [email, password].forEach(input=>{
        if(input.value == ""){
            input.style.border = "2px solid red";
        }else{
            input.style.border = "1px solid gray";
        }
    });
}