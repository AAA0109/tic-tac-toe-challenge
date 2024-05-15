import Score from './score.js';
import Board from './board.js';
import Message from './message.js';
import PlayAgain from './playAgain.js';

export default {
  template: `
    <div class="game">
      <Score :player1="score.player1" :player2="score.player2" />
      <Board :tiles="board" @click="makeMove" />
      <Message :text="message" />
      <PlayAgain v-if="gameOver" @click="resetGame" />
    </div>
    `,
  components: {
    Score,
    Board,
    Message,
    PlayAgain,
  },
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: Math.random() < 0.5 ? 'O' : 'X',
      gameOver: false,
      winner: null,
      score: {
        player1: 0,
        player2: 0,
      }
    }
  },
  methods: {
    makeMove(index) {
      if (this.board[index] === null && !this.gameOver) {
        this.board.splice(index, 1, this.currentPlayer);
        this.checkEndConditions();
        this.currentPlayer = this.currentPlayer === 'O' ? 'X' : 'O';
      }
    },
    checkEndConditions() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.gameOver = true;
          this.winner = this.board[a];
          if (this.winner === 'O') {
            this.score.player1++;
          } else if (this.winner === 'X') {
            this.score.player2++;
          }
          return;
        }
      }
      if (!this.board.includes(null)) {
        this.gameOver = true;
      }
    },
    resetGame() {
      this.board.fill(null);
      this.currentPlayer = Math.random() < 0.5 ? 'O' : 'X';
      this.gameOver = false;
      this.winner = null;
    },
  },
  computed: {
    score() {
      return {
        player1: this.winner === 'O' ? 1 : 0,
        player2: this.winner === 'X' ? 1 : 0,
      };
    },
    message() {
      if (this.gameOver) {
        return this.winner ? `Player ${this.winner === 'O' ? 1 : 2} wins` : "It's a draw";
      }
      return `It's player ${this.currentPlayer === 'O' ? 1 : 2}'s turn`;
    },
  },
}