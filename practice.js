function shaheer(name = "Shaheer", cast = "Khanzada"); {
    var a = name + " " + cast;
    return (a);
}
var nm = shaheer("Sharii", "Khan")
document.write(nm);


var a = 1;
do {
    document.write("Hey Shaheer WhatsUpp <br>")
    a = a + 1;
} while (a <= 10);

for (var a = 1; a <= 10; a++); {
    document.write("Hello Shaheer");
}

for (var a = 1; a <= 5; a = a + 1) {
    for (var b = 1; b <= a; b++) {
        document.write(b);
    }
    document.write("<br>");
}


document.write("<tabel>")

for (var a = 5; a >= 1; a--) {
    document.write("<tr>")
    for (var b = 1; b <= a; b++) {
        document.write("<th>" + " " + a + "</th>");
    }
    document.write("</tr>");

}
document.write("</tabel>")


