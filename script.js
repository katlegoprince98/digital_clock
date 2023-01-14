const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function getTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    
    h = h< 10? "0"+h : h;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = ampm;
    setTimeout(()=>{

        getTime()
    }, 1000)
}
getTime();


