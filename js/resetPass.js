const email = document.getElementById("email-reset");
const resetPassBtn = document.querySelector(".register-btn");

resetPassBtn.addEventListener("click", resetPass);

function resetPass(e){
    //change border if an input field is empty
        if(email.value == ""){
            email.style.border = "2px solid red";
        }else{
            email.style.border = "1px solid gray";
        }
}