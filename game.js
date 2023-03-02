document.querySelector(".start").onclick = (e) => {
    e.target.previousElementSibling.style.display = "none";
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";

}

// let x, count = 0;

//     x = setInterval(function () {
//         document.querySelector(".timer").innerHTML = "Time : " +count++;
//     },1000);

//     shyam();

// function shyam(){
//     if(count>=30){
//         clearInterval(x);
//     }

// }