function getPin () {
    const pin = generatePin()+'';
    const pinString = pin;

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin ();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate').addEventListener('click', function(){
    const pin = getPin ();
    const randomNumber = document.getElementById('random-number');
    randomNumber.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(e){
    const number = e.target.innerText;
    const typeNumber = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumber.value = '';
        } else if (number === '<') {
           const typeNumberValue = typeNumber.value;
           const typeNumberArray = typeNumberValue.split('');
           typeNumberArray.pop();
           const typeNumberStringJoin = typeNumberArray.join('');
           typeNumber.value = typeNumberStringJoin;
        }
        return number;
    } else {
        const previousNumber = typeNumber.value;
        const newNumber = previousNumber + number;
        typeNumber.value = newNumber;
    }
})

document.getElementById('matching-btn').addEventListener('click', function(){
    const randomNumberInput = document.getElementById('random-number');
    const randomNumberInputValue = randomNumberInput.value;

    const typeNumber = document.getElementById('typed-number');
    const typeNumberValue = typeNumber.value;

    const incorrect = document.getElementById('incorrect');
    const correct = document.getElementById('correct');

    const timesLeft = document.getElementById('times-left');
    const timesLeftText = parseInt(timesLeft.innerText);

    if (randomNumberInputValue === typeNumberValue) {
        correct.style.display = 'block';
        incorrect.style.display = 'none';
    } else if(timesLeftText >= 1) {
        typeNumber.value = '';
        incorrect.style.display = 'block';
        correct.style.display = 'none';
        const previousTimesLeft = timesLeftText - 1;
        timesLeft.innerText = previousTimesLeft;
    }
})