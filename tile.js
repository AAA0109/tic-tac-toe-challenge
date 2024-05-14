export default {
  props: ['marker', 'index'],
  template: `
    <button class="tile">
      {{ marker }}
    </button>
  `,
}