const images = [ "0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function paintImage(){
    const bgImage = document.createElement("img");  // HTML 요소 생성
    bgImage.src = `img/${chosenImage}`;
    bgImage.classList.add("bgImage");
    
    // body에 bgImage 추가
    document.body.appendChild(bgImage);
}

paintImage();

