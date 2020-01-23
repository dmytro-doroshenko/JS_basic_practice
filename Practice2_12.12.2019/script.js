// console.log('Task 1');

// let num1 = +prompt ('Введіть перше число: ');
// let num2 = +prompt ('Введіть друге число: ');
// let num3 = +prompt ('Введіть третє число: ');

// let min = null;
// let mid = null;
// let max = null

// if (num1 > num2 && num1 > num3) {
//     max = num1;
//     if (num2 > num3) {
//         mid = num2;
//         min = num3;
//     }
//     else {
//         mid = num3;
//         min = num2;
//     }
// }
// else if (num2 > num1 && num2 > num3) {
//     max = num2;
//     if (num1 > num3) {
//         mid = num1;
//         min = num3;
//     }
//     else {
//         mid = num1;
//         min = num2;
//     }
// }
// else {
//     max = num3;
//     if (num1 > num2) {
//         mid = num1;
//         min = num2;
//     }
//     else {
//         mid = num2;
//         min = num1;
//     }
// }

// console.log(min, mid, max);


console.log('------------------------')
console.log('Task 2');

let traffic_light = +prompt('Який сигнал світлофору ви бачите:\n1 - Червоний \n2 - Жовтий \n3 - Зелений\n0 - Світлофор не працює', 0);
let msg = null;

switch (traffic_light) {
    case 0:
        msg = 'Робіть, що хочете';
        break;
    case 1:
        msg = 'Стійте';
        break;
    case 2:
        msg = 'Чекайте';
        break;
    case 3:
        msg = 'Переходьте дорогу';
        break;
    default:
        msg = 'Вкажіть правильний сигнал світлофору';
}

alert(msg + '!');
console.log(msg + '!');


// console.log('------------------------')
// console.log('Task 3');

// let traffic_light1 = +prompt('Який сигнал світлофору ви бачите:\n1 - Червоний \n2 - Жовтий \n3 - Зелений\n0 - Світлофор не працює', 0);
// let isRoadClear = confirm('Дорога вільна від автомобілів?\n OK - Дорога вільна\n Cancel - Ви бачите машини на дорозі')
// let msg1 = null;

// if (isRoadClear){
//     switch (traffic_light1) {
//         case 0:
//             msg1 = 'Робіть, що хочете';
//             break;
//         case 1:
//             msg1 = 'Стійте';
//             break;
//         case 2:
//             msg1 = 'Чекайте';
//             break;
//         case 3:
//             msg1 = 'Переходьте дорогу';
//             break;
//         default:
//             msg1 = 'Вкажіть правильний сигнал світлофору';
//             break;
//     }
// }
// else{
//     switch (traffic_light1) {
//         case 0:
//             msg1 = 'Робіть, що хочете';
//             break;
//         case 1:
//             msg1 = 'Стійте і чекайте';
//             break;
//         case 2:
//             msg1 = 'Всеодно чекайте';
//             break;
//         case 3:
//             msg1 = 'Зачекайте, поки порушники проїдуть';
//             break;
//         default:
//             msg1 = 'Вкажіть правильний сигнал світлофору';
//             break;
//     }
// }

// alert(msg1 + '!');
// console.log(msg1 + '!');