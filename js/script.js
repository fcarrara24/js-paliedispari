const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');
const guessBtn = document.getElementById('guess-submitter');



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

guessBtn.addEventListener('click', function () {
    let num = document.getElementById("guessOutput").textContent;
    let even = document.getElementById("pari");
    let rndNum = rndInt(1, 5);
    num = parseInt(num);

    if ((isEven(num + rndNum) && even.checked) || (!isEven(num + rndNum) && !even.checked)) {
        document.getElementById('guessResponse').innerHTML = `Io avevo detto ${rndNum}\n Complimenti! hai vinto`;

    } else {
        document.getElementById('guessResponse').innerHTML = `Io avevo detto ${rndNum}\n Peccato, hai perso`;
    }
    document.getElementById('guessResponse').style = "block";
});

function updateTextInput(passInput, passValue) {
    const value = document.getElementById(passValue);
    const input = document.getElementById(passInput);

    //assigning items
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
    });

}





