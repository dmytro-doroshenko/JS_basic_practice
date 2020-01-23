console.log('Task 1.1');

let list_task1 = [];

for (let i = 0; i < 50; i++) {
    list_task1.push(i * 2);
}

console.log(list_task1.length);
console.log(list_task1);



console.log('--------------------');
console.log('Task 1.2');

let list_task1_2 = [];
for (let i = 0; i < 50; i++) {
    list_task1_2.push(i * 2 + 1);
}

console.log(list_task1_2.length);
console.log(list_task1_2);


console.log('--------------------');
console.log('Task 1.3');

let list_rand = [];

for (let i = 0; i < 20; i++) {
    list_rand.push(Math.random());
}

console.log(list_rand);

console.log('--------------------');
console.log('Task 1.3.1');

let list_rand1 = [];

for (let i = 0; i < 100; i++) {
    list_rand1.push(parseInt(Math.random() * (733 - 8) + 8));
}

console.log(list_rand1);



console.log('--------------------');
console.log('Task 2');

let list_task2 = [];

for (let i = 0; i < 100; i++) {
    list_task2.push(parseInt(Math.random() * 101));
}

console.log(list_task2);

for (let i = 2; i < 100; i+=3) {
    console.log(list_task2[i]);
}




console.log('--------------------');
console.log('Task 3');

let list_task3 = [];

for (let i = 0; i < 100; i++) {
    list_task3.push(parseInt(Math.random() * 101));
}

console.log(list_task3);
    
    
for (let i = 2; i < 100; i+=3) {
    if (list_task3[i] % 2 === 0) {
        console.log(list_task3[i]);
    }
}



console.log('--------------------');
console.log('Task 4');

let list_task4 = [];
let list_task4_new = [];

for (let i = 0; i < 100; i++) {
    list_task4.push(parseInt(Math.random() * 101));
}

console.log(list_task4);    
    
for (let i = 2; i < 100; i+=3) {
    if (list_task4[i] % 2 === 0) {
        list_task4_new.push(list_task4[i])
    }
}

console.log(list_task4_new);




console.log('--------------------');
console.log('Task 5');

let list_task5 = [];
for (let i = 0; i < 100; i++) {
    list_task5.push(parseInt(Math.random() * 101));
}

console.log(list_task5);


for (let i = 0; i < 100; i++) {
    if (list_task5[i + 1] % 2 === 0) {
        console.log(list_task5[i]);
    }
}


console.log('--------------------');
console.log('Task 6');

let check = [100, 250, 50, 168, 120, 345, 188];
let sum = null;

for (i = 0; i < check.length; i++) {
    sum += check[i];
}

console.log(sum/check.length);



console.log('--------------------');
console.log('Task 7');

let list_task7 = [];
let list_task7_new = [];

for (let i = 0; i < 50; i++) {
    list_task7.push(parseInt(Math.random() * 101));
    list_task7_new.push(list_task7[i] * 5);
}

console.log(list_task7);
console.log(list_task7_new);


console.log('--------------------');
console.log('Task 8');

let list_task8 = ['Green', 18, 'Yellow', 6548, 'Red', 112233, 'Blue', 'White', 'Pink', 789];
let list_task8_new = [];

for (let i = 0; i < list_task8.length; i++) {
    if (parseInt(list_task8[i])) {
        list_task8_new.push(list_task8[i]);
    }
}

console.log(list_task8_new);