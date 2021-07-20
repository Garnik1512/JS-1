let i = 0;
let k = 0;
let rows = 10;
while (i < rows) {
    part = " ";
    for (k = 0; k < rows - i; k++) part += " ";
    for (k = 0; k < 2 * i + 1; k++) part += "*";
    console.log(part);
    i++;
}
