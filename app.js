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
let interval = 0;
let inInterval = 0;
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
  interval = Math.floor(current / 1800);
  inInterval = current - interval * 1800;

  if (current > 1000) {
    timer.style.borderLeft = "none";
    timer.style.borderRight = "1px solid white";
  } else {
    timer.style.marginLeft = (current * 100) / (13 * 1800) + "%";
  }

  switch (interval) {
    case 0:
      t1.style.visibility = "visible";
      t1.style.width = inInterval / 18 + "%";
      break;
    case 1:
      t2.style.visibility = "visible";
      t2.style.width = inInterval / 18 + "%";
      break;
    case 2:
      t3.style.visibility = "visible";
      t3.style.width = inInterval / 18 + "%";
      break;
    case 3:
      t4.style.visibility = "visible";
      t4.style.width = inInterval / 18 + "%";
      break;
    case 4:
      t5.style.visibility = "visible";
      t5.style.width = inInterval / 18 + "%";
      break;
    case 5:
      t6.style.visibility = "visible";
      t6.style.width = inInterval / 18 + "%";
      break;
    case 6:
      t7.style.visibility = "visible";
      t7.style.width = inInterval / 18 + "%";
      break;
    case 7:
      t8.style.visibility = "visible";
      t8.style.width = inInterval / 18 + "%";
      break;
    case 8:
      t9.style.visibility = "visible";
      t9.style.width = inInterval / 18 + "%";
      break;
    case 9:
      t10.style.visibility = "visible";
      t10.style.width = inInterval / 18 + "%";
      break;
    case 10:
      t11.style.visibility = "visible";
      t11.style.width = inInterval / 18 + "%";
      break;
    case 11:
      t12.style.visibility = "visible";
      t12.style.width = inInterval / 18 + "%";
      break;
    case 12:
      t13.style.visibility = "visible";
      t13.style.width = inInterval / 18 + "%";
      break;

    default:
      break;
  }
}, 10);
