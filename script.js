const hrs = document.querySelector("#hrs");
const min = document.querySelector("#mins");
const sec = document.querySelector("#sec");
const h2 = document.querySelector("#h2");

setInterval(() => {
    let time = new Date();
    
    let hours = time.getHours() % 12 || 12; // Convert hours to 12-hour format
    let period = time.getHours() >= 12 ? "PM" : "AM"; // Determine AM or PM
    
    hrs.innerHTML = hours;
    h2.innerHTML = period;
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
}, 1000);
