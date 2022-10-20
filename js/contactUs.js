const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendMsgButton = document.getElementById("sendMsgBtn");

sendMsgButton.addEventListener("click", sendMessage);

function sendMessage() {
    //change border color if an input is empty
    [firstName, lastName, email, message].forEach(input => {
        if (input.value == "") {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "1px solid gray";
        }
    });
}