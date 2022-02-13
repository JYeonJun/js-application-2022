// getCurrentPostion 성공
function onGeoOk(position){     // position: JavaScript가 제공해주는 user 위치
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;   // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather div span");
        const icon = document.createElement("i");
        const weather__div = document.querySelector(".weather__temp");
        icon.setAttribute("class", "fas fa-solid fa-temperature-high");
        weather.before(icon);
        city.innerText = `🌏 ${data.name}`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // promise
}

// getCurrentPosition 실패
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

