// console.log('Task 1');

// Task_1(callback);

// console.log('-------------------------');
// console.log('Task 2');

// Task_2('Practice 6. 26.12.2019', callback_2);


// console.log('-------------------------');
// console.log('Task 3');

// Task_3(15, 30, (a, b) => {
//     return a + b
// })


// console.log('-------------------------');
// console.log('Task 4');

// let list_task4 = [5, 4, 8, 19, 22, 41, 1, 0, -9]
// Task_4(list_task4, callback_4)


// console.log('-------------------------');
// console.log('Task 5');

// console.log(Task_5(2, 12));


console.log('-------------------------');
console.log('Task 6');

console.log(Task_6(10));


console.log('-------------------------');
console.log('Task 7');

console.log(Task_7(10));
console.log(Task_7_V2(10))


console.log('-------------------------');
console.log('Task 8');

console.log(Task_8(15));
console.log(Task_8_V2(15));



function Task_1(cb) {
    cb();
}

function callback() {
    console.log('Hello!');
}


function Task_2 (something, cb) {
    cb(something);
}

function callback_2(arg) {
    console.log(arg);
}


function Task_3 (num1, num2, cb) {
    result = cb (num1, num2);
    console.log(result)
}

function callback_3 (first_num, second_num) {
    return first_num + second_num
}


function Task_4 (list, cb) {
    cb(list);
}

function callback_4(array) {
    result = array.sort((a, b) => b - a);
    console.log(result);
}


function Task_5(number, power) {
    if (power < 0) {
        return 'Error';
    } 
    else if (power === 0) {
        return 1;
    }
    else if (power === 1) {
        return number;
    }
    else {
        return (number * Task_5(number, power - 1));
    }
}


function Task_6(number) {
    let factor = 1;
    if (number < 0) {
        return 'Error';
    }
    else if (number === 0) {
        return factor;
    }
    else {
        for (i = 1; i <= number; i++) {
            factor *= i;
        }
        return factor;
    }
}


function Task_7(number) {
    if (number < 0) {
        return 'Error';
    }
    else if (number === 0) {
        return 1;
    }
    else {
        return number * Task_7(number - 1);
    }
}


function Task_7_V2(number) {
    return (number === 0) ? (1) : (number * Task_7_V2(number - 1));
}


function Task_8(length) {
    if (length < 0) {
        return 'Error';
    }
    else if (length === 0) {
        return 0;
    }
    else if (length === 1) {
        return 1;
    }
    else {
        return Task_8(length - 2) + Task_8(length - 1);
    }
}


function Task_8_V2(length) {
    return (length > 2) ? (Task_8_V2(length - 2) + Task_8_V2(length - 1)) : (1);
}