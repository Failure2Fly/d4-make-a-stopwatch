var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#start');
var resumeButton = document.querySelector('#start');
var seconds = 0;


// var mins = Math.floor(seconds/10/60);
// var secs = Math.floor(seconds/10 % 60); 
// var tenths = seconds % 10;


document.querySelector('#start').addEventListener('click', function(e){
    setInterval (startTimer, 1000);
});
document.querySelector('#start').addEventListener('click', pauseButton);
document.querySelector('#start').addEventListener('click', resumeButton);
// document.querySelector("timer").innerHTML = mins + ":" + secs + ":" + tenths + "0";

function startTimer (e) {
    startButton.innerHTML = 'Start';
    if (startButton.disabled === false) {
        startButton.innerHTML = 'Pause';
        startButton.style.backgroundColor = "red";
        seconds++;
    }
    else if (pauseButton.disabled === false) {
            pauseButton.innerHTML = 'Resume';
    }
}





// var time = 0;
// var running = 0;

// function startPause(){
//     if(running == 0){
//         running = 1;
//         increment();
//     document.getElementById("start").innerHTML = "Pause";
//     document.getElementById("startPause").style.backgroundColor = "red";   
//     document.getElementById("startPause").style.borderColor = "red";
//     }
//     else{
//         running = 0;
//     document.getElementById("start").innerHTML = "Resume"; 
//     document.getElementById("startPause").style.backgroundColor = "green"; 
//     document.getElementById("startPause").style.borderColor = "green";
//     }
// }









// document.querySelector('#start').addEventListener('click', function(){
//     setInterval (pauseTimer, 1000)
// });

// function pauseTimer (e) {
//     pauseButton.innerHTML = 'Pause';
//     if (pauseButton.disabled === false)  {
//         pauseButton.innerHTML = 'Resume';
//         pauseButton.disabled === true;

//     }
// } 


