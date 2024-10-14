// script.js
document.getElementById('submit').addEventListener('click', function() {
    const player1 = document.getElementById('player-1').value;
    const player2 = document.getElementById('player-2').value;

    if (player1 && player2) {
        document.getElementById('setup').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        document.getElementById('message').innerText = `${player1}, you're up!`;
        startGame(player1, player2);
    }
});

function startGame(player1, player2) {
    let currentPlayer = player1;
    let currentSymbol = 'X';
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            if (item.innerText === '') {
                item.innerText = currentSymbol;
                if (checkWin(currentSymbol)) {
                    document.getElementById('message').innerText = `${currentPlayer}, congratulations you won!`;
                    gridItems.forEach(cell => cell.removeEventListener('click', arguments.callee)); // Prevent further clicks
                } else {
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
                    document.getElementById('message').innerText = `${currentPlayer}, you're up!`;
                }
            }
        });
    });
}

function checkWin(symbol) {
    const gridItems = document.querySelectorAll('.grid-item');
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gridItems[a].innerText === symbol && 
               gridItems[a].innerText === gridItems[b].innerText && 
               gridItems[a].innerText === gridItems[c].innerText;
    });
}
