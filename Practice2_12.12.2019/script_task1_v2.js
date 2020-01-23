console.log('Task 1');

let num1 = +prompt ('Введіть перше число: ');
let num2 = +prompt ('Введіть друге число: ');
let num3 = +prompt ('Введіть третє число: ');

if (num1 < num2 && num1 < num3) {
    console.log(num1);
    if (num2 < num3) {
        console.log(num2);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num2);
    }
}
else if (num2 < num1 && num2 < num3) {
    console.log(num2);
    if (num1 < num3) {
        console.log(num1);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
}
else {
    console.log(num3);
    if (num1 < num2) {
        console.log(num1);
        console.log(num2);
    }
    else {
        console.log(num2);
        console.log(num1);
    }
}
