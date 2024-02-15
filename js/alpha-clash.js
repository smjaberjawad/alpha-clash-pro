document.addEventListener('keyup', function handleKeyboardButtonPress(e) {
    const pressedKey = e.key;

    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentKey = currentAlphabet.toLowerCase();

    console.log(currentKey, pressedKey);

    if (pressedKey === currentKey) {
        console.log('you got a point');

        const currentScoreElement = document.getElementById('current_score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        currentScoreElement.innerText = currentScore + 1;

        continueGame();
        removeBgColorById(currentKey);
    } else {
        console.log('you missed a point');

        const currentLifeElement = document.getElementById('current_life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        currentLifeElement.innerText = currentLife - 1;
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