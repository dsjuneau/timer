const t1 = document.getElementById("t-1");
const t2 = document.getElementById("t-2");
const t3 = document.getElementById("t-3");
const t4 = document.getElementById("t-4");
const t5 = document.getElementById("t-5");
const t6 = document.getElementById("t-6");
const t7 = document.getElementById("t-7");
const t8 = document.getElementById("t-8");
const t9 = document.getElementById("t-9");
const t10 = document.getElementById("t-10");
const t11 = document.getElementById("t-11");
const t12 = document.getElementById("t-12");
const t13 = document.getElementById("t-13");
const timer = document.getElementById("timer");

let hour = 8;
let minute = 30;
let second = 0;
let current = 0;
setInterval(() => {
  //replace this section with a timer once everything is working

  second++;
  if (second === 60) {
    minute++;
    second = 0;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  timer.innerHTML = `${hour}:${minute}:${second} is ${current}`;
  // end of this section to replace with timer once everything is working

  current = (hour - 8) * 3600 + (minute - 30) * 60 + second - 0;
}, 10);
