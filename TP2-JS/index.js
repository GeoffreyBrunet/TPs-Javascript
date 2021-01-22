let defaultFrequency = 1000;
let interTimer = setInterval(function(){myTimer();}, defaultFrequency);

function requestListener() {
    let timer = document.getElementById("currentHour");
    timer.innerHTML = this.responseText;
}

function myTimer() {
    let xhr = new XMLHttpRequest();
    xhr.onload = requestListener;
    xhr.open("GET", "time.php", true);
    xhr.send();
}

/*function myTime() {
    setInterval(myTimer, defaultFrequency);
}*/

function changeFrequency() {
    let frequencySeconds = document.getElementById("frequency");
    milliseconds = frequencySeconds.value * 1000;
    clearInterval(interTimer);
    interTimer = setInterval(function(){myTimer();}, milliseconds);
    console.log(milliseconds);
}

let status = new Boolean(true);

function startStop() {
    if (status == true) {
        clearInterval(interTimer);
        console.log("true");
        status = false;
    } else {
        interTimer = setInterval(function(){myTimer();}, defaultFrequency);
        console.log("false");
        status = true;
    }
}