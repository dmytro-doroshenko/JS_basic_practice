// -----------------Task 5---------------------
// Реализуйте органайзер, хранящий данные в локальном хранилище

let time_set = document.getElementById('time_sel');
let records_list_string = localStorage.getItem('time_notes');
let records_list = JSON.parse(records_list_string);
let added_task;
let key;;

if (!records_list) {
    records_list = {};

}


let day_schedule = document.createElement('div');
let headline = document.createElement('h4');
headline.innerText = 'Schedule for today';
day_schedule.appendChild(headline);
for (let i = 7; i < 22; i++) {
    let id = `${i}h00`;
    let time = `${i}:00`;
    let text;
    let time_block = document.createElement('p');
    
    if (Object.keys(records_list).includes(id)) {
        text = records_list[id];
    } else {
        create_option(id, time);
        text = '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _';
    }

    time_block.innerHTML = `${time}: ${text}`;
    day_schedule.appendChild(time_block);
}
task5.appendChild(day_schedule);




time_set.oninput = (event) => {
    key = event.target.selectedOptions[0].id;
}

function addTask() {
    added_task = document.getElementById('inp_task5').value;
    records_list[key] = added_task;
    localStorage.setItem('time_notes',JSON.stringify(records_list));
    location.reload();
}

function create_option (option_id, text) {
    let option_to_select = document.createElement('option');
    option_to_select.id = option_id;
    option_to_select.innerText = text;
    time_sel.appendChild(option_to_select);
}

function clearData() {
    localStorage.removeItem('time_notes');
    location.reload();
}