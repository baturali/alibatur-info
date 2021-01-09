<template>
  <section id="page">
    <div class="title">
      <h1>Ali Berk Batur</h1>
      <span>Front End Application Developer</span>
    </div>
    <div
      id="triangles"
      :class="{
        'transition-remove': dragged,
        'rotate-infinite-languages':
          !clicked && automatic && !dragged && activeFace === 'languages',
        'rotate-infinite-hobbies':
          !clicked && automatic && !dragged && activeFace === 'hobbies',
        'rotate-infinite-frameworks':
          !clicked && automatic && !dragged && activeFace === 'frameworks',
        'rotate-infinite-tools':
          !clicked && automatic && !dragged && activeFace === 'tools'
      }"
      draggable
      @dragstart="deleteGhost($event)"
      @dragover="userDrag($event)"
      @dragend="finishDrag"
      :style="[{ transform: 'rotateY(' + getY + 'deg)' }]"
    >
      <div class="layer first">
        <span class="text">tools</span>
        <div v-if="tools" class="list">
          <div
            class="logo"
            v-for="(tool, ind) of tools"
            :key="tool + '_' + ind"
            :style="[
              ind === 0 ? { 'background-size': '120px 60px !important;' } : '',
              { width: dimensions(ind) },
              { 'background-image': 'url(' + getTool(tool) + ')' }
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
              { width: dimensions(ind) },
              { 'background-image': 'url(' + getLang(lang) + ')' }
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
            :style="{ width: dimensions(ind) }"
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
              { width: dimensions(ind) },
              { 'background-image': 'url(' + getFramework(fw) + ')' }
            ]"
          />
        </div>
      </div>
      <div class="layer base" />
    </div>
    <Menu @rotate-to-line="rotateToLine" @debounced="debouncedRotate" />
  </section>
</template>

<script>
import Menu from '@/components/Menu.vue'
import { debounce } from 'debounce'

export default {
  name: 'Pyramid',
  components: { Menu },
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
    baseX: 0,
    x: 0,
    y: 270,
    z: 0,
    activeFace: 'languages',
    automatic: false,
    dragged: false,
    clicked: false,
    counter: 0
  }),
  mounted() {
    this.automatic = true
    setInterval(() => {
      if (this.dragged === false) this.automatic = true
      else this.automatic = false
    }, 7000)
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
      this.x = e.y
      this.y = e.x
    },
    finishDrag: debounce(function() {
      this.dragged = false
    }, 7000),
    rotateToLine(line) {
      this.clicked = true
      this.dragged = false
      switch (line) {
        case 'Languages':
          this.y = 270
          this.x = 0
          this.z = 13
          this.activeFace = 'languages'
          break
        case 'Hobbies':
          this.y = 180
          this.x = 13
          this.z = 0
          this.activeFace = 'hobbies'
          break
        case 'Frameworks':
          this.y = 90
          this.x = 0
          this.z = -13
          this.activeFace = 'frameworks'
          break
        case 'Tools':
          this.y = 0
          this.x = -13
          this.z = 0
          this.activeFace = 'tools'
          break
        default:
          break
      }
    },
    debouncedRotate: debounce(function() {
      this.clicked = false
    }, 7000)
  },
  computed: {
    getY() {
      // if (this.clicked) return this.y
      // if (!this.automatic && !this.dragged) return 270
      return this.y
    },
    getX() {
      // if (this.clicked) return this.x
      // if (!this.automatic && !this.dragged) return 4
      // if (this.x - this.baseX > 4) return 4
      // if (this.x - this.baseX < -4) return -4
      return this.x
    },
    getZ() {
      return this.z
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
  z-index: 13;
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
  z-index: 13;
  transform-origin: center center;
  transform-style: preserve-3d;
  cursor: move;
  transition: all 1.3s ease-in-out;
}
#triangles.transition-remove {
  -webkit-animation: 0;
  animation: 0;
  transition: unset !important;
}
#triangles:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
#triangles.rotate-infinite-languages {
  animation: rotating-languages 13s linear infinite !important;
}
#triangles.rotate-infinite-hobbies {
  animation: rotating-hobbies 13s linear infinite !important;
}
#triangles.rotate-infinite-frameworks {
  animation: rotating-frameworks 13s linear infinite !important;
}
#triangles.rotate-infinite-tools {
  animation: rotating-tools 13s linear infinite !important;
}
#triangles.mounted-animation {
  animation: rotating-languages 13s linear !important;
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

@keyframes rotating-languages {
  0% {
    -ms-transform: rotateY(270deg);
    -moz-transform: rotateY(270deg);
    -webkit-transform: rotateY(270deg);
    -o-transform: rotateY(270deg);
    transform: rotateY(270deg);
  }
  50% {
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  100% {
    -ms-transform: rotateY(270deg);
    -moz-transform: rotateY(270deg);
    -webkit-transform: rotateY(270deg);
    -o-transform: rotateY(270deg);
    transform: rotateY(270deg);
  }
}

@keyframes rotating-hobbies {
  0% {
    -ms-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  50% {
    -ms-transform: rotateY(-90deg);
    -moz-transform: rotateY(-90deg);
    -webkit-transform: rotateY(-90deg);
    -o-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
  }
  100% {
    -ms-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}

@keyframes rotating-frameworks {
  0% {
    -ms-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
  50% {
    -ms-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
  100% {
    -ms-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    -webkit-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
}
@keyframes rotating-tools {
  0% {
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  50% {
    -ms-transform: rotateY(270deg);
    -moz-transform: rotateY(270deg);
    -webkit-transform: rotateY(270deg);
    -o-transform: rotateY(270deg);
    transform: rotateY(270deg);
  }
  100% {
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}

// responsive
@media screen and (max-width: 900px) {
  #triangles {
    height: 250px !important;
    width: 350px !important;

    .layer:not(.base) {
      border-left: 250px solid transparent;
      border-right: 250px solid transparent;

      .list {
        top: 93px;
      }
      .text {
        font-size: 15px;
        top: 70px;
      }
    }
    .first {
      border-bottom: 425px solid $pyramidBlack;
      transform: rotateY(0deg) translateZ(125px) rotate3d(1, 0, 0, 36deg);
    }
    .second {
      border-bottom: 425px solid $pyramidBlue;
      transform: rotateY(90deg) translateZ(125px) rotate3d(1, 0, 0, 36deg);
    }
    .third {
      border-bottom: 425px solid $pyramidBlack;
      transform: rotateY(180deg) translateZ(125px) rotate3d(1, 0, 0, 36deg);
    }
    .fourth {
      border-bottom: 425px solid $pyramidBlue;
      transform: rotateY(-90deg) translateZ(125px) rotate3d(1, 0, 0, 36deg);
    }
    .base {
      bottom: 0;
      height: 350px;
      width: 350px;
      transform: rotateX(-90deg) translateZ(190px);
    }
  }
}
@media screen and (max-height: 710px) {
  .title {
    top: 20px !important;
  }
}
@media screen and (max-width: 376px) {
  .title {
    top: 40px;

    h1 {
      font-size: 25px;
    }
    span {
      font-size: 19px;
    }
  }
}
</style>
