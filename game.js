let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let screen3 = document.querySelector(".screen3");
let start = document.querySelector(".screen1 a");
let images = document.querySelectorAll(".screen2 img");
let selectedImage = "";
let timerSpan = document.querySelector(".timer span");
let scoreSpan = document.querySelector(".score span");
let restart = document.querySelector(".restart");
let scoreReport;

start.onclick = (event) => {
    event.preventDefault();
    screen1.style.display = "none";
    screen2.style.display = "flex";
}


for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        selectedImage = images[i].src;
        screen2.style.display = "none";
        screen3.style.display = "flex";

        letsPlay();
    };
}


function letsPlay() {
    let timer = 0;
    timerSpan.innerHTML = timer;
    //Timer Interval
    let x = setInterval(() => {
        if (timer === 30) {
            clearInterval(x);
            clearInterval(y);
            alert("Your Score is:- " + score)
            screen3.style.display = "none";
            restart.style.display = "flex";
        } else {
            timerSpan.innerHTML = ++timer;
        }
    }, 1000);

    //Image Pop Interval
    let y = setInterval(popPhoto, 300)
        
}

function popPhoto(){
    let img = document.createElement("img") 
    img.setAttribute("src", selectedImage)
    
    img.style.left = getRandomLeft()
    img.style.top = getRandomTop()

    img.setAttribute("onclick", "removeImage(this)")

    document.querySelector(".screen3 .images").append(img)
}

function getRandomLeft(){
    return Math.random() * (window.innerWidth - 60) + "px"
}

function getRandomTop(){
    return Math.random() * (window.innerHeight - 60) + "px"
}

let score = 0;
   
function removeImage(element){
    element.remove()
    scoreSpan.innerHTML = ++score;
}

    

