let aray = [
  ["Asim", 0, "Graduate", "BS"],
  ["Asim", 0, "Graduate", "BS"],
  ["Zia", 10, "Graduate", "frontend"],
  ["Usama", 5, "Developer", "forntend"],
  ["Shaheer", 100, "Developer", "Full Stack"],
  ["Shahmeer", 100, "Developer", "Full Stack"],
];
document.write("<table border= '1px solid' cellspacing='0'>");
for (let a = 0; a < aray.length; a++) {
  document.write("<tr>");
  for (let b = 0; b < 4; b++) {
    document.write("<td>" + aray[a][b] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
