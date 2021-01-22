function reqListener() {
    let timer = document.getElementById("currentHour");
    timer.innerHTML = this.responseText;

}
setInterval(function () {
    let oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "time.php", true);
    oReq.send();
}, 1000);
