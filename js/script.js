const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');


btn.addEventListener('click', function () {
    //inputEl.
    let string = String(inputEl.value);
    console.log(string);
    let alertColor;
    if (isNaN(string) && string !== '') {
        resultEl.classList.remove('alert-danger');
        alertColor = 'alert-success';
        resultEl.innerHTML = (isPalindrome(string)) ? 'la stringa è palindroma' : 'la stringa non è palindroma';
    } else {
        console.log('errore')
        resultEl.classList.remove('alert-success')
        alertColor = 'alert-danger'
        resultEl.innerHTML = `inserire una stringa di caratteri in formato valido`
    }
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');

});
