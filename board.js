import Tile from './tile.js';

export default {
  props: ['tiles'],
  template: `
    <div class="board">
      <Tile v-for="(tile, index) in tiles" :key="index" :marker="tile" :index="index" @click="$emit('click', index)" />
    </div>
  `,
  components: {
    Tile,
  },
}