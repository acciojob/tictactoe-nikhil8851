  const submitButton = document.getElementById('submit');
        const player1Input = document.getElementById('player-1');
        const player2Input = document.getElementById('player-2');
        const h1 = document.querySelector('h1');
        const messageDiv = document.querySelector('.message');
        const boardDiv = document.querySelector('.board');
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let player1 = '';
        let player2 = '';

        submitButton.addEventListener('click', () => {
            player1 = player1Input.value;
            player2 = player2Input.value;
            if (player1 && player2) {
                h1.classList.remove('hidden');
                messageDiv.classList.remove('hidden');
                boardDiv.classList.remove('hidden');
                messageDiv.textContent = `${player1}, you're up!`;
            }
        });

        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (!cell.textContent) {
                    cell.textContent = currentPlayer;
                    if (checkWin()) {
                        messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
                    } else {
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                        messageDiv.textContent = `${currentPlayer === 'X' ? player1 : player2}, you're up!`;
                    }
                }
            });
        });

        function checkWin() {
            const winPatterns = [
                [1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [1, 5, 9], [3, 5, 7]
            ];
            return winPatterns.some(pattern => {
                return pattern.every(id => {
                    return document.getElementById(id).textContent === currentPlayer;
                });
            });
        }