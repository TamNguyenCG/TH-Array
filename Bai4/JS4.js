let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let i = 1;
for (; i < numbers.length; i++) {
    if (max < numbers[i]){
        max = numbers[i]
    }
}
document.write(`x = [${numbers}] <br>`)
document.write(`Max is: ${max}`)