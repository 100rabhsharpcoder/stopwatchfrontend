// fetching the element for performing operation
const clock  =  document.querySelector(".clock");
const start = document.getElementById('startTimer');
const stop = document.getElementById('stopTimer');
const reset = document.getElementById('reset');
const lap = document.getElementById('lap');
const lapList = document.getElementById('lapList');


// variable for display the time 
const  seconds =0; 
const  minuts = 0;
const  hours = 0;

// array for display lap history on div
let lapTimes = [];



// 
let second= 0; let min=0; let hr=0;
let setIntervalid;

// function to start the stopwatch timer and couter and to display the stopwatch
start.addEventListener('click',()=>{
   setIntervalid= setInterval(()=>{
    if(second<59){
      second++;
    }
    else if(min>=59){
        hr++;
        min=0;
    }
    else {
        second=0;
        min++;
    }

  var  seconds = String(second).padStart(2,"0");
  var  minuts = String(min).padStart(2,"0");
  var  hours = String(hr).padStart(2,"0");
     clock.innerText = `${hours} : ${minuts}: ${seconds}`;
    },1000);
     });

    stop.addEventListener('click', () => {
      clearInterval(setIntervalid);
      saveLapTime();
    });



    // function for reset the watch

    reset.addEventListener('click', () => {
      second = 0;
      min = 0;
      hr = 0;
      lapTimes = [];
      clearInterval(setIntervalid);
    
      var seconds = String(second).padStart(2, "0");
      var minuts = String(min).padStart(2, "0");
      var hours = String(hr).padStart(2, "0");
      clock.innerText = `${hours} : ${minuts}: ${seconds}`;
    
      clearLapList();
    });


   // function for save time laps and pushing the laps into arrays 
    function saveLapTime() {
      var lapTime = `${hr} : ${min} : ${second}`;
      lapTimes.push(lapTime);
    
      var lapItem = document.createElement('li');
      lapItem.innerText = lapTime;
      lapList.appendChild(lapItem);
    }

    
    // function for reset lap list 
    function clearLapList() {
      lapList.innerHTML = '';
    }


     // lap button for updating the current lap time to unordered list
    lap.addEventListener('click',()=>{
      saveLapTime() ;
    });
    


  







 
