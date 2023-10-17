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
    let num = document.getElementById("diceHuman").innerHTML;
    console.log(num)
    let even = document.getElementById("pari");
    let rndNum = rndInt(1, 5);
    num = parseInt(num);
    document.getElementById('guessResponse').innerHTML = ``;
    //setting a timeout for the function
    diceAnimation();
    setTimeout(function () {
        document.getElementById('diceBot').innerHTML = rndNum;
        if ((isEven(num + rndNum) && even.checked) || (!isEven(num + rndNum) && !even.checked)) {
            document.getElementById('guessResponse').innerHTML = `<i class="fa-solid fa-trophy" style="color: #d4af37;"></i>`;

        } else {
            document.getElementById('guessResponse').innerHTML = `<i class="fa-solid fa-face-sad-tear" style="color: #144190;"></i>`;
        }
        document.getElementById('guessResponse').style = "block";
    }, 3000);
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


function diceAnimation() {
    for (let i = 0; i < 2; i++) {
        const botDice = document.getElementById('diceBot')
        botDice.innerHTML = '?';
        botDice.animate(
            [
                // keyframes
                { fontSize: "1em", },
                { fontSize: "2em" },
                { fontSize: "1em" },
                { fontSize: "2em" },
                { backgroundColor: "white", fontSize: "1em", color: "white" }

            ],
            {
                // timing options
                duration: 3000,
            },

        );

    };


}




