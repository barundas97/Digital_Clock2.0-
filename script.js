const hrs = document.querySelector("#hrs")
const min = document.querySelector("#mins")
const sec = document.querySelector("#sec")
const title = document.querySelector("#h2");

setInterval(()=>{
    let time = new Date();
    
    hrs.innerHTML = time.getHours() %12 || 12;
    title.innerHTML = hrs >= 12 ? "PM":"AM";
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
},1000);
