// -----------------Task 3---------------------
//Дан текстареа. В него можно ввести данные, затем поредактировать их, затем еще поредактировать. Пусть текстареа хранит историю своих изменений (даже после перезагрузки страницы). Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории.

let input_area = document.getElementById('area_task3');
let history = localStorage.getItem(input_area.id);
let counter;
let parsed = JSON.parse(history);

if (!history) {
    parsed = [];
    counter = 0;
    prev_btn.disabled = true;
} else {
    counter = parsed.length;
    input_area.value  = parsed[counter - 1];
}


input_area.onblur = function () {
        prev_btn.disabled = false;
        parsed.push(this.value);
        counter++
        localStorage.setItem(input_area.id, JSON.stringify(parsed));
}


reset_btn.onclick = function () {
    localStorage.clear();
    location.reload();
}


prev_btn.onclick = function () {
    counter--;
    input_area.value = parsed[counter - 1];
    if (counter < 1) {
        prev_btn.disabled = true;
        input_area.value = '';
    } else {
        prev_btn.disabled = false;
    }
    next_btn.disabled = false;   
}


next_btn.onclick = function () {
    if (counter >= parsed.length - 1) {
        next_btn.disabled = true;
    }
    counter++;
    input_area.value = parsed[counter -1];
    prev_btn.disabled = false;
}