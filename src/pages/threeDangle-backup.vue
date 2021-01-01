<template>
  <section id="page">
    <div id="triangles">
      <div class="layer first" />
      <div class="layer second" />
      <div class="layer third" />
      <div class="layer fourth" />
      <div class="layer base" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Triangles',
  mounted() {}
}
</script>

<style lang="scss" scoped>
#page {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}
#triangles {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 400px;
  width: 400px;
  perspective: 100%;
  z-index: 13;
  transform-style: preserve-3d;
  animation: rotating 13s linear infinite;
}

.layer {
  position: absolute;
  width: 0;
  z-index: 13;
}

.first {
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 400px solid rgba(64, 224, 208, 0.8);
  transform: rotateY(0deg) translateZ(100px) rotate3d(1, 0, 0, 30deg);
  z-index: 13;
}
.second {
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 400px solid rgba(777, 13, 13, 0.8);
  transform: rotateY(90deg) translateZ(100px) rotate3d(1, 0, 0, 30deg);
  z-index: 13;
}
.third {
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 400px solid rgba(35, 241, 52, 0.8);
  transform: rotateY(180deg) translateZ(100px) rotate3d(1, 0, 0, 30deg);
  z-index: 13;
}
.fourth {
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 400px solid rgba(235, 111, 11, 0.8);
  transform: rotateY(-90deg) translateZ(100px) rotate3d(1, 0, 0, 30deg);
  z-index: 13;
}
.base {
  background-color: black;
  bottom: 0;
  height: 100%;
  width: 100%;
  transform: rotateX(-90deg) translateZ(173px);
  z-index: 13;
}

@keyframes rotating {
  0% {
    -ms-transform: rotateY(0deg) rotateX(0deg);
    -moz-transform: rotateY(0deg) rotateX(0deg);
    -webkit-transform: rotateY(0deg) rotateX(0deg);
    -o-transform: rotateY(0deg) rotateX(0deg);
    transform: rotateY(0deg) rotateX(0deg);
  }
  25% {
    -ms-transform: rotateY(90deg) rotateX(22deg);
    -moz-transform: rotateY(90deg) rotateX(22deg);
    -webkit-transform: rotateY(90deg) rotateX(22deg);
    -o-transform: rotateY(90deg) rotateX(22deg);
    transform: rotateY(90deg) rotateX(22deg);
  }
  50% {
    -ms-transform: rotateY(180deg) rotateX(0deg);
    -moz-transform: rotateY(180deg) rotateX(0deg);
    -webkit-transform: rotateY(180deg) rotateX(0deg);
    -o-transform: rotateY(180deg) rotateX(0deg);
    transform: rotateY(180deg) rotateX(0deg);
  }
  75% {
    -ms-transform: rotateY(270deg) rotateX(-22deg);
    -moz-transform: rotateY(270deg) rotateX(-22deg);
    -webkit-transform: rotateY(270deg) rotateX(-22deg);
    -o-transform: rotateY(270deg) rotateX(-22deg);
    transform: rotateY(270deg) rotateX(-22deg);
  }
  100% {
    -ms-transform: rotateY(360deg) rotateX(0deg);
    -moz-transform: rotateY(360deg) rotateX(0deg);
    -webkit-transform: rotateY(360deg) rotateX(0deg);
    -o-transform: rotateY(360deg) rotateX(0deg);
    transform: rotateY(360deg) rotateX(0deg);
  }
}
</style>
