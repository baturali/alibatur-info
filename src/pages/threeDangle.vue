<template>
  <section id="page">
    <div class="title">
      <h1>Ali Berk Batur</h1>
      <span>Front End Application Developer</span>
    </div>
    <div
      id="triangles"
      :class="{'rotate-infinite': automatic && !dragged && !atStart}"
      draggable
      @dragstart="deleteGhost($event)"
      @dragover="userDrag($event)"
      @dragend="finishDrag"
      :style="[
        {'transform': 'rotateY(' + getX + 'deg) rotateX(' + getY + 'deg) !important'}
      ]"
    >
      <div class="layer first">
        <span class="text">tools</span>
        <div v-if="tools" class="list">
          <div
            class="logo"
            v-for="(tool, ind) of tools"
            :key="tool + '_' + ind"
            :style="[
              ind === 0 ? {'background-size': '120px 60px !important;'}: '',
              {'width': dimensions(ind)},
              {'background-image': 'url(' + getTool(tool) + ')'}
            ]"
          />
        </div>
      </div>
      <div class="layer second">
        <span class="text">languages</span>
        <div v-if="languages" class="list">
          <div
            class="logo"
            v-for="(lang, ind) of languages"
            :key="lang + '_' + ind"
            :style="[
              {'width': dimensions(ind)},
              {'background-image': 'url(' + getLang(lang) + ')'}
            ]"
          />
        </div>
      </div>
      <div class="layer third">
        <span class="text">hobbies</span>
        <div v-if="hobbies" class="list">
          <span 
            v-for="(hobby, ind) of hobbies"
            :key="hobby + '_' + ind"
            class="icon"
            :style="{'width': dimensions(ind)}"
          >
            <i class="fa-2x" :class="hobby"></i>
          </span>
        </div>
      </div>
      <div class="layer fourth">
        <span class="text">frameworks</span>
        <div v-if="frameworks" class="list">
          <div
            class="logo"
            v-for="(fw, ind) of frameworks"
            :key="fw + '_' + ind"
            :style="[
              {'width': dimensions(ind)},
              {'background-image': 'url(' + getFramework(fw) + ')'}
            ]"
          />
        </div>
      </div>
      <div class="layer base" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Triangles',
  data: () => ({
    languages: [
      'html-logo.png',
      'css-logo.png',
      'js-logo.png',
      'ts-logo.png',
      'json-logo.png',
      'sql-logo.png'
    ],
    hobbies: [
      'fab fa-playstation',
      'fab fa-spotify',
      'fas fa-plane-departure',
      'fas fa-futbol',
      'fas fa-cat',
      'fas fa-motorcycle'
    ],
    frameworks: [
      'vue-logo.png',
      'nuxt-logo.svg',
      'react-logo.png',
      'next-logo.png',
      'tailwind-logo.svg',
      'jquery-logo.gif'
    ],
    tools: [
      'agile.png',
      'git.png',
      'visual-studio.png',
      'jira.png',
      'postman.png',
      'photoshop.png'
    ],
    baseX: 450,
    baseY: 450,
    x: 0,
    y: 0,
    mountedY: -126,
    mountedX: 4,
    atStart: true,
    automatic: false,
    dragged: false
  }),
  mounted() {
    setTimeout(() => {
      this.automatic = true
      this.atStart = false
    }, 3000)
    setInterval(() => {
      if (this.dragged === false) this.automatic = true
      else this.automatic = false
    }, 5000)
  },
  methods: {
    dimensions(index) {
      switch (index) {
        case 0:
          return '100%'
        case 1:
        case 2:
          return '35%'
        default:
          return '33.3%'
      }
    },
    getLang(lang) {
      return require(`@/assets/languages/${lang}`)
    },
    getFramework(fw) {
      return require(`@/assets/frameworks/${fw}`)
    },
    getTool(tool) {
      return require(`@/assets/tools/${tool}`)
    },
    deleteGhost(e) {
      this.dragged = true
      const img = new Image()
      img.src = '@/assets/invisible.png'
      e.dataTransfer.setDragImage(img, 0, 0)
    },
    userDrag(e) {
      this.x = e.x
      this.y = e.y
    },
    finishDrag() {
      setTimeout(() => { this.dragged = false }, 5000)
    }
  },
  computed: {
    getX() {
      if (!this.automatic && !this.dragged) return 594
      return this.x - this.baseX
    },
    getY() {
      if (!this.automatic && !this.dragged) return 4
      if (this.y - this.baseX > 4) return 4
      if (this.y - this.baseX < -4) return -4
      return this.y - this.baseY
    }
  }
}
</script>

<style lang="scss" scoped>
#page {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 70px;

  h1 {
    color: $gray;
    letter-spacing: 3px;
    font-family: $fontBold;
    font-size: 40px;
    text-transform: uppercase;
    text-shadow: -2px 2px $black;
  }

  span {
    color: $mainColor;
    font-family: $fontSemi;
    font-size: 23px;
    letter-spacing: 2px;
    text-shadow: -1px 1px $black;
  }
}
#triangles {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 450px;
  width: 550px;
  margin-top: 50px;
  perspective: 100%;
  z-index: 13;
  transform-origin: center center;
  transform-style: preserve-3d;
  cursor: move;
}
#triangles:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
#triangles.rotate-infinite {
  animation: rotating 13s linear infinite !important;
  transition: all 1s ease-in-out !important;
}

.layer {
  position: absolute;
  width: 0;
  z-index: 13;

  .text {
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 90px;
    left: -100px;
    width: 200px;
  }

  .list {
    display: flex;
    position: absolute;
    justify-content: center;
    flex-wrap: wrap;
    width: 340px;
    top: 130px;
    left: -170px;
  }

  .logo {
    background-size: auto 60px !important;
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
    margin: 24px 0;
  }

  .icon {
    width: 60px;
    height: 60px;
    font-size: 26px;
    color: $white;
    margin: 24px 0;
    text-align: center;
  }
}
.first {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid $pyramidBlack;
  transform: rotateY(0deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;

  .text {
    color: $white;
  }
}
.second {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid $pyramidBlue;
  transform: rotateY(90deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;
}
.third {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid $pyramidBlack;
  transform: rotateY(180deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;

  .text {
    color: $white;
  }
}
.fourth {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid $pyramidBlue;
  transform: rotateY(-90deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;
}
.base {
  background-color: rgb(0, 0, 0);
  bottom: 0;
  height: 625px;
  width: 622px;
  transform: rotateX(-90deg) translateZ(283px);
  z-index: 13;

  .text {
    color: $white;
  }
}

@keyframes rotating {
  0% {
    -ms-transform: rotateY(-126deg) rotateX(4deg);
    -moz-transform: rotateY(-126deg) rotateX(4deg);
    -webkit-transform: rotateY(-126deg) rotateX(4deg);
    -o-transform: rotateY(-126deg) rotateX(4deg);
    transform: rotateY(-126deg) rotateX(4deg);
  }
  50% {
    -ms-transform: rotateY(54deg) rotateX(-4deg);
    -moz-transform: rotateY(54deg) rotateX(-4deg);
    -webkit-transform: rotateY(54deg) rotateX(-4deg);
    -o-transform: rotateY(54deg) rotateX(-4deg);
    transform: rotateY(54deg) rotateX(-4deg);
  }
  100% {
    -ms-transform: rotateY(234deg) rotateX(4deg);
    -moz-transform: rotateY(234deg) rotateX(4deg);
    -webkit-transform: rotateY(234deg) rotateX(4deg);
    -o-transform: rotateY(234deg) rotateX(4deg);
    transform: rotateY(234deg) rotateX(4deg);
  }
}
</style>
