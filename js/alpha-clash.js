document.addEventListener('keyup', function handleKeyboardButtonPress(e) {
    const pressedKey = e.key;

    const currentAlphabetElement = document.getElementById('current_alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentKey = currentAlphabet.toLowerCase();

    console.log(currentKey, pressedKey);

    if (pressedKey === currentKey) {
        const currentScore = getTextElementValueById('current_score');
        const updatedScore = currentScore + 1;
        setValueById('current_score', updatedScore);

        continueGame();
        removeBgColorById(currentKey);

        const finalScore = document.getElementById('final_score');
        finalScore.innerText = updatedScore;
    } else {
        const currentLife = getTextElementValueById('current_life');
        const updatedLife = currentLife - 1;
        setValueById('current_life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
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

function gameOver() {
    hideElementById('playground');
    showElementById('score');
}

function playAgain() {
    hideElementById('score');
    showElementById('playground');
    setValueById('current_life', 5);
    setValueById('current_score', 0);
}