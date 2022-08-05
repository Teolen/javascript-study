let rect = document.getElementById("spinner");
let sStopButton = document.getElementById("superStop");
let angle = 0;
let rotatingR;
let iter = 1;
let multiplier = 1;
let ids = [];
let id;
let audio = new Audio('./res/spin-me.mp3');
audio.loop = true;
sStopButton.setAttribute('disabled','disabled');

function rotate() {
    
    angle = (angle+1*iter*multiplier)%360;
    rect.style.transform = "rotate("+angle+"deg)";
    //id = window.requestAnimationFrame(rotate);
    ids.pop();
    ids.push(window.requestAnimationFrame(rotate));
    //window.requestAnimationFrame(rotate); 
}
function start() {
    if(!ids.pop())
    ids.push(window.requestAnimationFrame(rotate));
}
function change() {

    iter=(iter === 1)?(-1):1;
}
function stop() {

    if(ids.length > 0)
    window.cancelAnimationFrame(ids.pop());
    if(!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}
/* in developing */
function reset() {
    stop();
    multiplier = 1;
    rect.style.transform = "(rotate"+0+"deg)";
}
function superStop() {
    if(!sStopButton.getAttribute('disabled'))
    sStopButton.setAttribute('disabled','disabled');
    let timer = setInterval((()=> multiplier--),100);
    setTimeout(()=>{
        clearInterval(timer);
        multiplier = 1;
        rect.setAttribute("src","./res/green-square.jpg");
        audio.pause();
        audio.currentTime = 0;
        stop();
    },(multiplier)*100);
}
function spinMe() {
    if(sStopButton.getAttribute('disabled'))
    sStopButton.removeAttribute('disabled');
    if (audio.paused && multiplier > 10) {
        audio.play();
        rect.setAttribute("src","./res/pete-burns.jpg");
    } 
    multiplier++;
}

