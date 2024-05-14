export default {
  props: ['player1', 'player2'],
  template: `
    <div class="score">
      <b>Player 1:</b> <span class="victories">{{ player1 }}</span><br />
      <b>Player 2:</b> <span class="victories">{{ player2 }}</span>
    </div>
  `,
}