//-----------------------Task 9-----------------------
// Створити 4 інпута. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк, четвертий - кнопка при натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом. Після побудови таблички, при подвійному натисканні на будь-яку ячейку з'являється новий інпут, в якому з'являється поточне значення ячейки на яку ви натискали. Змінюючи інформацію в цьому інпуті, ви змінюєте інформацію в самій ячейці


create.onclick = function() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('cells').value;
    let filling = document.getElementById('filling').value;

    create_table(rows, columns, filling);
}

function create_table (rows, columns, text) {
    let block = document.getElementById('for_table')
    let table = document.createElement('table');
    let body = document.createElement('tbody');
    
    block.appendChild(table);
    table.style = 'width: 100%;'
    table.appendChild(body);

    for (i = 0; i < rows; i++) {
        let table_row = document.createElement('tr');
        body.appendChild(table_row);

        for (j = 0; j < columns; j++) {
            let table_cell = document.createElement('td');

            table_row.appendChild(table_cell);
            table_cell.id = `data_${i}_${j}`;
            table_cell.innerHTML = text;
            table_cell.style = 'border: 1px solid black;';

            table_cell.ondblclick = function () {
                let block = document.getElementById('for_table');
                let inp = document.createElement('input');

                inp.name = this.id;
                inp.value = document.getElementById(this.id).innerHTML;
                block.appendChild(inp);

                inp.oninput = function () {
                    let cell = document.getElementById(this.name);
                    cell.innerHTML = this.value;    
                }

                inp.onblur = function (event) {
                    block.removeChild(event.target);
                }
            }
        }
    }
    
}