function staircase(n) {
    // Write your code here
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n - i; j > 0; j--) {
            string += " ";
        }
        for (let k = 1; k <= i; k++) {
            string += "#";
        }
        string += "\n"
    }
    console.log(string);
}