const btn_open = document.getElementById("btn_open");
const btn_login = document.getElementById("btn_login");
const register = document.getElementById("register");
const primary_block = document.getElementById("primary-block");
const login = document.getElementById("login");
const save = document.getElementById("save");
const _name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn_open.onclick = function () {
    open_register_block();
}


btn_login.onclick = function () {
    open_login_block();
}

save.onclick = function () {
    
    addEmployees();
    console.log(200);
    
}
function open_register_block() {
    register.style.display = "block";
    primary_block.style.display = "none";
};

function open_login_block() {
    register.style.display = "none";
    login.style.display = "block";
};




function addEmployees() {
    fetch('http://localhost:3000/employees', {
        method: 'POST',
        body: JSON.stringify({
            name: _name,
            email: email,
            password: password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
