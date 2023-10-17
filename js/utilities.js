/**
 * given two integers, returns a pseudo-randomic between the two (included)
 * @param {Integer} min 
 * @param {Integer} max 
 * @returns {Integer}
 */
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * given an integer return true if even, false if odd
 * @param {Integer} number 
 * @returns {Boolean}
 */
function isEven(number) {
    return !(number % 2);
}

/**
 * return true if palindrome, false elseway
 * @param {string} [string  to analiaze if palindrome] 
 * @returns {boolean} 
 */
function isPalindrome(string) {
    //avoid conflicts for spaces or Capital case 
    string = string.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i <= (string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/**
 * shakes if an error occurs
 */
function animateError() {
    //animation
    document.getElementById("palindrome").animate(
        [
            // keyframes
            { transform: "translatex(0px)" },
            { transform: "translatex(-15px)" },
            { transform: "translatex(15px)" },
            { transform: "translatex(0px)" },
        ],
        {
            // timing options
            duration: 250,
        },
    );
}