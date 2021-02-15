
// 3 buttons
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let counter = 0;

let startBool = false;
let stopBool = false;

start.addEventListener("click", function () {
  startBool = true;
  stopBool = false;
});

// this will pause the clock
stop.addEventListener("click", function () {
  stopBool = true;
});

// this will reset the clock
reset.addEventListener("click", function () {
  counter = 0;
  document.querySelector("#timer > p").innerText = `0:00`;
  stopBool = true;
});

var timer = setInterval(function () {
  if (startBool && !stopBool) {
    counter += 1;
    var minute = Math.floor(counter / 60);
    var second = counter % 60;
    if (second < 10) {
      second = "0" + second;
    }
    document.querySelector("#timer > p").innerText = `${minute}:${second}`;
  }
}, 1000);