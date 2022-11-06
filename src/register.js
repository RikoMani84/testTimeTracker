const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const save = document.getElementById("save");

const register = document.getElementById("register");
const primary_block = document.getElementById("primary-block");

export function open_register_block() {
    register.style.display = "block";
    primary_block.style.display = "none";
};

export function addUsers() {
    save.addEventListener("click", function(){
    
        data = {
            "name":name.value,
            "email":email.value,
            "password":password.value
        }
    
        jsonText.innerText = JSON.stringify(data)
    });
}
