const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){
    event.preventDefault();    // 브라우저가 기본 동작을 실행하지 못하도록 한다.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

