document.write("<h1>" + "Object" + "</h1>");
let a = {
  name: "Shaheer",
  cast: "Khanzada",
  age: 22,

  aray: ["Shaheer", "Khanzada", "Rajput"],
  second: function () {
    return this.name + " " + this.cast;
  },
};
document.write(a.second());

var aray = ["Shaheer", "Zia", "Usama"];
var b = [10, 20, 30, 40];

document.write(aray + "<br>");

aray.push({ age: 19, name: "zia khalid" });
document.write(aray[3].age + aray[3].name + "<br>");

document.write("<h1>" + "For in Loop + Object" + "</h1>");

let obj = {
  name: "Shaheer",
  cast: "Khanzada",
  age: 22,
};
for (var key in obj) {
  document.write(obj[key] + "<br>");
}

document.write("<h1>" + "Map Method" + "</h1>");

var n = [
  {
    fname: "Shaheer",
    lname: "Khanzada",
    fname: "Shaheer",
    lname: "Khanzada",
    fname: "Shaheer",
    lname: "Khanzada",
    fname: "Shaheer",
    lname: "Khanzada",
  },
];

var m = n.map(test);
document.write(
  fname + "<br>" + fname + "<br>" + fname + "<br>" + fname + "<br>" + fname
);
function test(e) {
  return e * 10;
}
