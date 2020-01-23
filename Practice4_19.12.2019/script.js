console.log('Task 2');
console.log(Task_2(10));


console.log('------------------------');
console.log('Task 3');
console.log('max =', Task_3(Task_2(5)));


console.log('------------------------');
console.log('Task 4');
console.log('sum =', Task_4(Task_2(5)));


console.log('------------------------');
console.log('Task 5');
console.log('sum_list =', Task_5(Task_2(7), Task_2(5)));


function Task_1 () {
    let list = [];
    for (i in arguments) {
        list[i] = arguments[i];
    }
    return list;
}

function Task_2 (len) {
    let list = [];
    for (i = 0; i < len; i++) {
        list[i] = parseInt(Math.random() * 1001);
    }
    return list;
}

function Task_3 (list) {
    console.log('list =', list);
    let max = list[0];
    for (i of list) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

function Task_4 (list) {
    let sum = 0;
    console.log('list =', list);
    for (i of list) {
        sum += i;
    }
    return sum;
}

function Task_5 (list1, list2) {
    console.log('list_1 =', list1);
    console.log('list_2 =', list2);
    let sum_list = [];
    let sm_list = [];
    let lg_list = []
    if (list1.length < list2.length) {
        sm_list = list1;
        lg_list = list2;
    }
    else {
        sm_list = list2;
        lg_list = list1;
    }
    for (i in sm_list) {
        sum_list[i] = list1[i] + list2[i];
    }
    for (i = sm_list.length; i < lg_list.length; i++) {
        sum_list.push(lg_list[i]);
    }
    return sum_list;
}























// console.log('Task 1');
// console.log('max =', Task_1(111, 51, 9));


// console.log('------------------------');
// console.log('Task 2');
// console.log('min =', Task_2(111, 51, 9));


// console.log('------------------------');
// console.log('Task 3');
// console.log('min =', Task_3(1, 2, 3, 4, 901, -57, 77, -9000));


// console.log('------------------------');
// console.log('Task 4');
// console.log(Task_4(1, 2, 3, 4, 901, -57, 77, -9000));


// console.log('------------------------');
// console.log('Task 5');
// console.log('max =', Task_5(1, 2, 3, 4, 901, -57, 77, -9000))



// console.log('------------------------');
// console.log('Task 6');
// console.log('min =', Task_6(1, 2, 3, 4, 901, -57, 77, -9000))


// console.log('------------------------');
// console.log('Task 8');
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(Task_8(arr, 9));


// function Task_1 (num1, num2, num3) {
//     let max = num1;
//     if (num2 > max) {
//         max = num2;
//     }
//     if (num3 > max) {
//         max = num3;
//     }
//     console.log(max);
//     return max;
// }

// function Task_2 (num1, num2, num3) {
//     let min = num1;
//     if (num2 < min) {
//         min = num2;
//     }
//     if (num3 < min) {
//         min = num3;
//     }
//     console.log(min);
//     return min;
// }

// function Task_3 () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (i of arguments) {
//         if (i < min) {
//             min = i;
//         }
//         if (i > max) {
//             max = i;
//         }
//     }
//     console.log(max);
//     return min;
// }




// function Task_5 () {
//     let max = arguments[0];
//     for (i of arguments) {
//         if (i > max) {
//             max = i;
//         }
//     }
//     return max;
// }

// function Task_6 () {
//     let min = arguments[0];
//     for (i of arguments) {
//         if (i < min) {
//             min = i;
//         }
//     }   
//     return min;
// }

// function Task_8 (list, i) {
//     if (i + 1 < list.length) {
//         num = list[i];
//         list[i] = list[i+1];
//         list[i+1] = num;
//         return list;}
//     else {
//         return 'Error!';
//     }
// }