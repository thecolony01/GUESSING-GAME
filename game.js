let targetNumber = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
let attempts = 0;

function checkGuess() {
    const userGuessInput = document.getElementById('guess');
    const userGuess = parseInt(userGuessInput.value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    // Validate input: Ensure the number is within the valid range
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = 'Please enter a valid number between 1 and 50.';
        message.style.color = 'red';
    } else if (userGuess === targetNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
    } else if (userGuess < targetNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'orange';
    } else if (userGuess > targetNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'orange';
    }

    // Clear the input field after each guess
    userGuessInput.value = '';

    // Increment and display attempts
    attempts++;
    attemptsDisplay.textContent = attempts;
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 50) + 1; // Reset target number
    attempts = 0;
    document.getElementById('guess').value = ''; // Clear input field
    document.getElementById('message').textContent = ''; // Clear message
    document.getElementById('attempts').textContent = attempts; // Reset attempts
}

function limitInputLength(inputElement) {
    if (parseInt(inputElement.value) > 99) {
        inputElement.value = inputElement.value.slice(0, 2); // Limit to two digits
    }
}
