const API_KEY = "7e75015709b39d75b1433ec0f69173b8";

// getCurrentPostion 성공
function onGeoOk(position){     // position: JavaScript가 제공해주는 user 위치
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;   // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
    }); // promise
}

// getCurrentPosition 실패
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

