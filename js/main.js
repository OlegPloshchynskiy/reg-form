const login = JSON.parse(localStorage.getItem("login"))
const pass = JSON.parse(localStorage.getItem("pass"))

let form_reg = document.forms["registration"];
let input_login = form_reg.elements["email"]
let input_pass = document.querySelector("#password")
let input_pass_repeat = document.querySelector("#password-repeat")
let signIn = document.forms["sign-in"];
let signIn_login = signIn.elements["email"]
let signIn_pass = signIn.elements["password"]
let signIn_enter = signIn.elements["enter"]
let signIn_button = document.querySelector("#signIn-btn");
let signUp_button = document.querySelector("#signUp-btn");
let reg_card = document.querySelector("#reg-card")

form_reg.addEventListener("submit", function () {
    localStorage.setItem("login", JSON.stringify(input_login.value));

    if (input_pass.value == input_pass_repeat.value) {
        localStorage.setItem("pass", JSON.stringify(input_pass.value));
    } else {
        alert("Wrong password");
    }
})

signIn.addEventListener("submit", function () {
    if (signIn_login.value === login && signIn_pass.value === pass) {
        window.location = 'https://olegploshchynskiy.github.io/todo-list/index.html'
        alert()
        // console.log("Welcome");
    } else {
        alert("Wrong password")
    }
})

signIn_button.addEventListener("click", function () {
    reg_card.setAttribute(
        "style",
        "transform: translateX(-400px)"
    )
})

signUp_button.addEventListener("click", function () {
    reg_card.setAttribute(
        "style",
        "transform: translateX(0)"
    )
})
