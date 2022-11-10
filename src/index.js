const btn_open = document.getElementById("btn_open");
const btn_login = document.getElementById("btn_login");
const primary_block = document.getElementById("primary-block");
const secondary_block = document.getElementById("secondary-block");
const login = document.getElementById("login");
const enter = document.getElementById("enter");
const _name = document.getElementById("_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn_lg = document.getElementById("btn_lg");

btn_open.onclick = function () {
    open_login_block();

}

enter.onclick = function () {
    addEmployees();
}

function open_snd_block() {
    secondary_block.style.display = "block";
    login.style.display = "none";
    primary_block.style.display = "none";

}
function open_login_block() {
    login.style.display = "block";
    primary_block.style.display = "none";
};

function addEmployees() {
    fetch('http://127.0.0.1:3000/employees', {
        method: 'POST',
        body: JSON.stringify({
            name: _name.value,
            email: email.value,
            password: password.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function sceondryBlock() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var employees = response;
            console.log(employees);
            var item = '';
            for (var i = 0; i < employees.length; i++) {
                item += `Hello, <span id="name"> ${employees[i].name} </span>`
            }
            document.getElementById('titleSC').innerHTML = item;
        }
    };

    xhttp.open("GET", "http://localhost:3000/employees", true);
    xhttp.send();
}
sceondryBlock();    