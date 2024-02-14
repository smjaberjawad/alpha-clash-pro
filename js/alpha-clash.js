document.addEventListener('keyup', function handleKeyboardButtonPress(e) {
    const pressedKey = e.key;

    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentKey = currentAlphabet.toLowerCase();

    console.log(currentKey, pressedKey);

    if (pressedKey === currentKey) {
        console.log('you got a point');
        continueGame();
        removeBgColorById(currentKey);
    } else {
        console.log('you missed a point');
    }
});

function continueGame() {
    const alphabet = alphabetGenerator();

    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText = alphabet;

    setBgColorById(alphabet);
}

function enterTheGame() {
    hideElementById('home');
    showElementById('playground');
    continueGame();
}