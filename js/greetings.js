const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();    // 브라우저가 기본 동작을 실행하지 못하도록 한다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    const date = new Date();
    const hours = date.getHours();

    if(hours >= 6 && hours < 12){
        greeting.innerText = `Good morning ${username}`;
    } else if(hours >= 12 && hours < 18){
        greeting.innerText = `Good afternoon ${username}`;
    } else{
        greeting.innerText = `Good night ${username}`;
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
   paintGreetings(savedUsername);
}