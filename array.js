document.write("<h1>" + "Arrays Parctice" + "</h1>");
const aray = [10, 20, 30, 40, 50];

document.write("<ul>");
for (a = 0; a <= 4; a++) {
  document.write("<li>" + aray[a] + "</li>");
}
document.write("</ul>");

let ary = new Array(2);
ary[1] = "Asim";
ary[2] = "Kz";
for (a = 0; a <= 2; a++) {
  ary[a] = prompt("Username");
  if (ary[1] == ary[a] && ary[2] == ary[a]) {
    alert("login");
  }
}
