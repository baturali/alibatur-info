<template>
  <div class="menu">
    <div
      class="item"
      v-for="(line, index) of lines"
      :key="line + '_' + index"
      @click.stop="rotateToLine(line)"
    >
      <span>{{ line }}</span>
      <i class="fas fa-arrow-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    lines: ['Languages', 'Frameworks', 'Tools', 'Hobbies']
  }),
  methods: {
    rotateToLine(name) {
      this.$emit('rotate-to-line', name)
      this.$emit('debounced')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: calc(50vh - 90px);
  z-index: 1;

  .item {
    margin: 5px;
    margin-left: 0;
    padding: 5px;
    padding-right: 13px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: $fontBold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 93px;
    height: 35px;

    span {
      padding-right: 10px;
      z-index: 2;
    }
    svg {
      display: none !important;
      color: $white;
      z-index: 2;
    }
  }
  .item:hover {
    color: $white;
    width: 130px;
    z-index: 2;

    svg {
      display: block !important;
    }
  }
  .item::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: $mainColor;
    border-top-right-radius: 4px;
  }
  .item::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 7px;
    width: 100%;
    height: 15px;
    transform: skew(-45deg);
    background-color: $mainColor;
  }
}
// responsive for only under 900px
@media screen and (max-width: 900px) {
  .menu {
    display: none !important;
  }
}
</style>
