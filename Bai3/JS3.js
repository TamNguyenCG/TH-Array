let value = +prompt("Enter a number: ");
let numbers = [-3, 5, 1, 3, 2, 10];
let check = false;
let i = 0
for (; i < numbers.length; i++) {
    if (value === numbers[i]) {
        check = true;
        break;
    }
}
if (check === true) {
    alert("Value " + value + " found at element " + i)
} else {
    alert("Value " + value + " doesn't exist in arrays ")
}
