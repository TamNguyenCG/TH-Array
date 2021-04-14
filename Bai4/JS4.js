let numbers = [-3, 5, 1, 3, 2, 10];
let min = numbers[0];
let i = 1;
for (; i < numbers.length; i++) {
    if (min > numbers[i]){
        min = numbers[i]
    }
}
document.write(`x = [${numbers}] <br>`)
document.write(`Min is: ${min}`)