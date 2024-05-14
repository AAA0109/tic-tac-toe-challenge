import Score from './score.js';
import Board from './board.js';
import Message from './message.js';
import PlayAgain from './playAgain.js';

export default {
  template: `
    <div class="game">
      <Score :player1="5" :player2="3" />
      <Board />
      <Message :text="'It&rsquo;s a draw'" />
      <PlayAgain />
    </div>
  `,
  components: {
    Score,
    Board,
    Message,
    PlayAgain,
  }
}