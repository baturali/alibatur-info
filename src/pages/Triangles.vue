<template>
  <section>
    <div id="triangles">
      <div class="layer first" />
      <div class="layer second" />
    </div>
    <div class="shadow" />
  </section>
</template>

<script>
export default {
  name: 'Triangles',
  mounted() {}
}
</script>

<style lang="scss" scoped>
#triangles {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: calc(100vh - 60px);
  perspective: 900px;
  perspective-origin: 50% 40%;
  z-index: 13;
}

.layer {
  position: absolute;
  width: 0;
  z-index: 13;
}

.first {
  border-left: 380px solid transparent;
  border-right: 380px solid transparent;
  border-bottom: 567.6px solid rgba(13, 13, 13, 0.93);
  top: 47px;
  right: 229px;
  transform: rotate3d(0, 1, 0, 50deg) rotate3d(1, 0, 0, 37deg);
  z-index: 13;
}
.second {
  border-left: 320px solid transparent;
  border-right: 320px solid transparent;
  border-bottom: 554px solid rgba(34, 34, 34, 0.93);
  transform: rotate3d(0, 0, 1, 19deg);
  z-index: 13;
}
.shadow {
  position: fixed;
  height: 650px;
  width: 1000px;
  left: 52%;
  top: 52%;
  transform: translate(-50%, -50%);
  box-shadow: 23px 0px 23px 0px rgba(0,0,0,0.75);
  background-color: white;
  border-radius: 13px;
  z-index: -3;
}
</style>