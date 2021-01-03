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

  .item {
    margin: 5px;
    margin-left: 0;
    padding: 5px;
    padding-right: 13px;
    font-size: 14px;
    cursor: pointer;
    transition: all .3s ease;
    background-color: $mainColor;
    border-left-style: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: $fontBold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 93px;

    span {
      padding-right: 10px;
    }
    svg {
      display: none !important;
      color: $white;
    }
  }
  .item:hover {
    color: $white;
    width: 130px;

    svg {
      display: block !important;
    }
  }
}
</style>