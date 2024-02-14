document.addEventListener('keyup', function handleKeyboardButtonPress() {
    console.log('button pressed');
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