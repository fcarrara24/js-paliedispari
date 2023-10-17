const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');


btn.addEventListener('click', function () {
    //inputEl.
    let num = parseInt(inputEl.value);
    let alertColor;
    if (!isNaN(num)) {
        if (num % 2 === 1) {
            num = num + 1;
        }
        alertColor = 'alert-success';

        resultEl.innerHTML = num;
    } else {
        console.log('errore')
        alertColor = 'alert-danger'
        resultEl.innerHTML = `inserire un numero`
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
});
