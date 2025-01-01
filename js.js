function playGame(playerchoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerchoice === computerchoice) {
        result = `It's a tie! Both chose ${playerchoice}.`;
    } else if (
        (playerchoice === 'rock' && computerchoice === 'scissors') ||
        (playerchoice === 'paper' && computerchoice === 'rock') ||
        (playerchoice === 'scissors' && computerchoice === 'paper')
    ) {
        result = `You win! ${playerchoice} beats ${computerchoice}.`;
    } else {
        result = `You lose! ${computerchoice} beats ${playerchoice}.`;
    }

    document.getElementById('result').innerText = result;
}
