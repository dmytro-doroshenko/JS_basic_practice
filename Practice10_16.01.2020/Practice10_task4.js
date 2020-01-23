// -----------------Task 4---------------------
// Реализуйте записную книгу, хранящую данные в локальном хранилище


let input_area = document.getElementById('area_task4');
let history = localStorage.getItem(input_area.id);
let counter;
let parsed = JSON.parse(history);
let record_number;

if (!history) {
    parsed = [];
    counter = 0;
} else {
    counter = parsed.length;
}

function addRecord () {
    parsed.push(area_task4.value);
    counter++
    localStorage.setItem(input_area.id, JSON.stringify(parsed));
    input_area.value = '';
    location.reload();
}

for (let i = 0; i < counter; i++) {
    let parent_block = document.getElementById('task4');
    let created_block = create_block(i, parsed);
    parent_block.appendChild(created_block);
}

function create_block(id, list) {
    let block = document.createElement('div');
    block.id = `record_${id+1}`;

    let headline = document.createElement('h4');
    headline.innerText = `Record #${id+1}`;
    block.appendChild(headline);

    let paragraph = document.createElement('p');
    paragraph.innerText = list[id];
    block.appendChild(paragraph);

    return block;
}