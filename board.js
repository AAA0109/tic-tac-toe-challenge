import Tile from './tile.js';

export default {
  template: `
    <div class="board">
      <Tile marker="x" :index="0" @click="alert(0)" />
      <Tile marker="o" :index="1" @click="alert(1)" />
      <Tile marker="x" :index="2" @click="alert(2)" />
      <Tile marker="o" :index="3" @click="alert(3)" />
      <Tile marker="x" :index="4" @click="alert(4)" />
      <Tile marker="o" :index="5" @click="alert(5)" />
      <Tile marker="x" :index="6" @click="alert(6)" />
      <Tile marker="o" :index="7" @click="alert(7)" />
      <Tile marker="x" :index="8" @click="alert(8)" />
    </div>
  `,
  components: {
    Tile,
  },
  methods: {
    alert: (index) => {
      window.alert(`Clicked on tile ${index}`);
    },
  }
}