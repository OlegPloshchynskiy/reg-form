const login = JSON.parse(localStorage.getItem("login"));
const password = JSON.parse(localStorage.getItem("password"));

const getItem = (item) => document.querySelector(item);

const submit = getItem("#reg")
submit.onclick = function() {
        
}

function addLogin(login) {
    localStorage.setItem("User_login", JSON.stringify(login))
}
