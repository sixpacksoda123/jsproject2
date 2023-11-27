// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let currentScore = 10;
let highScore = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const currentScoreDisplay = document.getElementById('currentScore');
    const highScoreDisplay = document.getElementById('highScore');

    const userGuess = parseInt(guessInput.value);

    // Check if the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Invalid value. Number must be between 1 and 100.';
    } else {
        // Check if the guess is correct
        if (userGuess === secretNumber) {
            message.textContent = 'Congratulations! You guessed the correct number.';
            document.body.classList.add('success');

            // Update high score if the current score is higher
            if (currentScore > highScore) {
                highScore = currentScore;
                highScoreDisplay.textContent = highScore;
            }
        } else {
            // Update message for too low or too high
            message.textContent = userGuess < secretNumber ? 'Too low! Try again.' : 'Too high! Try again.';
            currentScore--;
            currentScoreDisplay.textContent = currentScore;

            // Check if the game is over
            if (currentScore === 0) {
                message.textContent = 'Sorry, game is over. The correct number was ' + secretNumber + '.';
                document.body.classList.add('failure');
            }
        }
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    currentScore = 10;

    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const currentScoreDisplay = document.getElementById('currentScore');
    const highScoreDisplay = document.getElementById('highScore');

    guessInput.value = '';
    message.textContent = '';
    currentScoreDisplay.textContent = currentScore;

    document.body.classList.remove('success', 'failure');


}
resetGame();