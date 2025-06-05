let display = document.getElementById("display");
let[seconds , minutes , hours] = [0,0,0];
let interval = null;
let isRunning = false ;
//Formatting the Time
 function formatTime(num){
     return num < 10 ? "0"+ num : num;
 }
function updateTime(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
    }
    if(minutes==60){
        minutes = 0;
        hours++;
    }
    display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
}
//Start Controll
document.getElementById("start-btn").addEventListener(("click"),()=>{
     if(!isRunning){
        interval = setInterval(updateTime , 1000);
        isRunning = true;
     }
})

//Pause Controll
document.getElementById("pause-btn").addEventListener(("click"),()=>{
    clearInterval(interval);
    isRunning = false;
})

// Reset Controll
document.getElementById("reset-btn").addEventListener(("click"),()=>{
     display.innerText = "00:00:00";
     clearInterval(interval);
     isRunning = false;
   [seconds , minutes , hours] = [0,0,0];
    document.getElementById("laps").innerHTML = "";
    lapCount = 1;
})

//Laps Count
  let lapCount = 1;
document.getElementById("lap-btn").addEventListener(("click"),()=>{
    if(isRunning){
let laps = document.getElementById("laps");
  let li = document.createElement("li");
  const lapTime = display.innerText;
  li.innerText = `Lap${lapCount++} ${lapTime}`;
  laps.appendChild(li);
      
    }
})




