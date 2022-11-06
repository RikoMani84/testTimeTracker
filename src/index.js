import { addUsers } from './register.js'

const btn_open = document.getElementById("btn_open");
const btn_login = document.getElementById("btn_login");
const register = document.getElementById("register");
const primary_block = document.getElementById("primary-block");
const login = document.getElementById("login");

btn_open.onclick = function () {
    open_register_block();
}


btn_login.onclick = function () {
    open_login_block();
}
function open_register_block() {
    register.style.display = "block";
    primary_block.style.display = "none";
};

function open_login_block() {
    register.style.display = "none";
    login.style.display = "block";
};

addUsers();