// TASK1

// Sub1
const ageInput = document.getElementById('age');
const checkAgeButton = document.getElementById('checkAge');

checkAgeButton.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    let category;
    if (isNaN(age)) {
        category = 'invalid';
    } else if (age < 18) {
        category = 'minor';
    } else if (age < 60) {
        category = 'adult';
    } else {
        category = 'senior';
    }
    switch(category){
        case 'minor':
            alert("Access denied");
            break;
        case 'adult':
            alert("Access granted");
            break;
        case 'senior':
            alert("Have a good rest");
            break;
        default:
            alert("Technical work");
    }
});

// Sub2

const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const signInput = document.getElementById('sign');

function calculate(firstNumberInput, secondNumberInput, signInput) {
    const calculateButton = document.getElementById('calculate');
    const resultDisplay = document.getElementById('result');
    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(firstNumberInput.value);
        const num2 = parseFloat(secondNumberInput.value);
        const sign = signInput.value;
        let result;
        if (isNaN(num1) || isNaN(num2)) {
            alert("Invalid input");
            return;
        }
        switch(sign) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                alert("Invalid operator");
                return;
        }
        resultDisplay.innerText = result;
    });

}
calculate(firstNumberInput, secondNumberInput, signInput);

// TASK2
// Sub1
const oddNumbers = document.getElementById('evenNumbers');
for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        const listItem = document.createElement('li');
        listItem.innerText = i;
        oddNumbers.appendChild(listItem);
    }
}
// Sub2
const sumNumbers = document.getElementById('sumNum');
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
sumNumbers.innerText = sum;

// Sub3
let elapsedTime = 0;
let isRunning = true;

async function updateTimer() {
    while (isRunning) {
        document.getElementById('timer').innerText = elapsedTime;
        elapsedTime++; 
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
updateTimer();

const stopInput = document.getElementById('stopInput');
stopInput.addEventListener('input', () => {
    if(stopInput.value.trim().toLowerCase() === 'stop'){
        isRunning = false;
    }
});

// TASK3

// Sub1
const n = document.getElementById('n');
const primeNumbers = document.getElementById('primeNumbers');
const showPrimesButton = document.getElementById('ifIsPrime');
function isPrime(n){
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

showPrimesButton.addEventListener('click', () => {
    const num = parseInt(n.value);
    if (isNaN(num)) {
        primeNumbers.innerText = 'Please enter a valid number'; 
    } else {
        primeNumbers.innerText = isPrime(num) ? 'Prime' : 'Not Prime'; 
    }
});

// Sub2

const inputString = document.getElementById('inputString');

function reverseString(str) {
    return str.split('').reverse().join('');
}
const reverseButton = document.getElementById('reverseButton');
reverseButton.addEventListener('click', () => {
    const str = inputString.value;
    if (str.trim() === '') {
        alert("Please enter a valid string");
    } else {
        reverseResult.innerText = reverseString(str);
    }
});

// Sub3
const factorialInput = document.getElementById('factorialInput');
const factorialButton = document.getElementById('factorialButton');
const factorialResult = document.getElementById('factorialResult');
function getFactorial(n){
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

factorialButton.addEventListener('click', () => {
    const num = parseInt(factorialInput.value);
    if (isNaN(num) || num < 0) {
        alert("Please enter a valid non-negative integer");
    } else {
        factorialResult.innerText = getFactorial(num);
    }
});

// Extra Task

const startGameButton = document.getElementById('startGame');

startGameButton.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Enter something...';
    inputField.id = 'newInputField';

    const inputButton = document.createElement('button');
    inputButton.innerText = 'Submit';
    inputButton.id = 'submitButton';

    const guessedNUmber = Math.floor(Math.random() * 10) + 1;
    
    inputButton.addEventListener('click', () => {
        if(parseInt(inputField.value.trim()) === guessedNUmber) {
            parent.removeChild(inputField);
            parent.removeChild(inputButton);
            const congratsMessage = document.createElement('p');
            congratsMessage.innerText = 'Congratulations! You guessed the number!';
            parent.appendChild(congratsMessage);
        }else if(parseInt(inputField.value.trim()) > guessedNUmber){
            alert("Too high! Try again.");
        } else {
            alert("Too low! Try again.");
        }
    });

    const parent = startGameButton.parentElement;

    parent.removeChild(startGameButton);

    parent.appendChild(inputField);
    parent.appendChild(inputButton);
});