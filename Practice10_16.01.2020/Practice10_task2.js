// -----------------Task 2---------------------
// Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп. Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму). Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах. Сделайте ваш скрипт как можно более универсальным.

let keys = Object.keys(localStorage);
for (key of keys) {
    let data = localStorage.getItem(key);
    let field = document.getElementById(key);
    if (!field) {
        continue;
    }
    if (field.type === 'checkbox' || field.type === 'radio') {
        field.checked = data;
    }
    else {
        field.value = data;
    }
}




let inside_form = document.forms.form1;
inside_form.oninput = (e) => {
    let currentElement = document.getElementById(e.target.id);
    if (e.target.type === 'checkbox') {
        if (e.target.checked) {
            localStorage.setItem(e.target.id, 'checked');
        }
        else {
            localStorage.removeItem(e.target.id);
        }    
    }
    else if (e.target.type === 'radio') {
        let radio_list = document.getElementsByName(e.target.name)
        for (key of radio_list) {
            if (key.checked) {
                localStorage.setItem(key.id, true);
            }
            else{
                localStorage.removeItem(key.id)
            }
        }
    }
    else{ 
        localStorage.setItem(e.target.id, currentElement.value);
    }
}

