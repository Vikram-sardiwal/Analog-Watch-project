let d = new Date();
let h = d.getHours();
let s = d.getSeconds();
let m = d.getMinutes();
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

one.innerHTML = d.getHours();
one.style.color = "red";
two.innerHTML = d.getMinutes();
three.innerHTML = d.getSeconds();
four.innerHTML = Date();


function time() {
  if (s >= 60) {
    m++;
    s -= 60;
    if (m >= 60) {
      h++;
      m -= 60;
    }
    if (h >= 12) {
      h -= 12;
    }
  }
}

setInterval(time, 1000);
