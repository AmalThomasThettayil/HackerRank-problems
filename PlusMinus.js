//for loop
function plusMinus(arr) {
    // Write your code here
    let negCount = 0;
    let posCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negCount++;
        } else if (arr[i] > 0) {
            posCount++;
        } else {
            zeroCount++;
        }
    }
    let sum = negCount + posCount + zeroCount;
    let rPos = posCount / sum;
    let rNeg = negCount / sum;
    let rZero = zeroCount / sum;

    console.log(rPos.toFixed(6));
    console.log(rNeg.toFixed(6));
    console.log(rZero.toFixed(6));
}
let arr = [-1, -1, 0, 1, 1]
plusMinus(arr);

//for each
function plusMinus(arr1) {
    // Write your code here
    let negCount = 0;
    let posCount = 0;
    let zeroCount = 0;

    arr1.forEach(n => {
        if (n < 0) {
            negCount++;
        } else if (n > 0) {
            posCount++;
        } else {
            zeroCount++;
        }
    })

    let sum = negCount + posCount + zeroCount;
    let rPos = posCount / sum;
    let rNeg = negCount / sum;
    let rZero = zeroCount / sum;

    console.log(rPos.toFixed(6));
    console.log(rNeg.toFixed(6));
    console.log(rZero.toFixed(6));
}
let arr1 = [-1, -1, 0, 1, 1]
plusMinus(arr1);