function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function alphabetGenerator() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const i = Math.round(Math.random() * 25);
    const alphabet = alphabets[i];

    return alphabet;
}