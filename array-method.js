document.write("<h1>" + "Arrays Methods" + "</h1>");

var aray = ["Shaheer", "Zia", "Usama"];
var b = [10, 20, 30, 40];

document.write(aray + "<br>");
aray.unshift("Khanzada");
document.write(aray + "<br>");
var d = aray.concat(b);

document.write(d + "<br>");

var d = aray.join(" - ");

document.write(d + "<br>");

var s = aray.includes("Shaheer");
document.write(s + "<br>");

let k = [10, 15, 18, 20];

document.write(k + "<br>");

let l = k.some(checkAdult);
document.write(l + "<br>");

function checkAdult(k) {
  return k >= 18;
  Q;
}
