// -----------------Task 1---------------------
// Дан textarea. В него вводится текст. Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea. 

let inp = document.getElementById('area_1');

inp.value = localStorage.getItem('textarea');

inp.oninput = function (e) {
    localStorage.setItem('textarea', this.value);
}