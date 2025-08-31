function christmasCountdown () {
const christmasDate = new Date("January 01, 2026 00:00");
//const christmasDate = new Date("February 05, 2024 15:21");
const now = new Date();
const diff = christmasDate - now;
//console.log(diff);

const msInSecond = 1000;
const msInMinute = 60*1000;
const msInHour = 60*60*1000;
const msInDay = 24*60*60*1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;
//console.log(displayDay);

const displayHour = Math.floor(diff%msInDay/msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinute = Math.floor(diff%msInHour/msInMinute);
document.querySelector(".minutes").textContent = displayMinute;

const displaySecond = Math.floor(diff%msInMinute/msInSecond);
document.querySelector(".seconds").textContent = displaySecond;

if (diff <= 0) {
    document.querySelector(".days").textContent=0;
    document.querySelector(".hours").textContent=0;
    document.querySelector(".minutes").textContent=0;
    document.querySelector(".seconds").textContent=0;
    clearInterval(timerID);
    happyNewYear()
}

}

let timerID = setInterval(christmasCountdown, 1000);

function happyNewYear(){
    const heading = document.querySelector("h1");
    heading.textContent="HAPPY NEW YEAR!!!";
    heading.classList.add("red");
}   

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})


christmasCountdown();

