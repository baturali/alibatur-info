<template>
  <section id="page">
    <div class="who-i-am">
      <h1>Ali Berk Batur</h1>
      <span>Front End Application Developer</span>
    </div>
    <div id="triangles">
      <div class="layer first">
        <span class="text">Tools</span>
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
        <span class="text">Languages</span>
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
        <span class="text">Hobbies</span>
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
        <span class="text">Frameworks</span>
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
      'fas fa-film',
      'fas fa-motorcycle'
    ],
    frameworks: [
      'vue-logo.png',
      'nuxt-logo.svg',
      'react-logo.png',
      'next-logo.png',
      'jquery-logo.gif',
      'tailwind-logo.svg',
    ],
    tools: [
      'agile.png',
      'git.png',
      'visual-studio.png',
      'jira.png',
      'postman.png',
      'photoshop.png'
    ]
  }),
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

.who-i-am {
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 93px;

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
  height: 623px;
  width: 623px;
  margin-top: 50px;
  perspective: 100%;
  z-index: 13;
  transform-style: preserve-3d;
  animation: rotating 13s linear infinite;
  //transform: rotateY(270deg);
}

.layer {
  position: absolute;
  width: 0;
  z-index: 13;

  .text {
    font-size: 24px;
    text-align: center;
    text-decoration: underline;
    position: absolute;
    top: 100px;
    left: -100px;
    width: 200px;
  }

  .list {
    display: flex;
    position: absolute;
    justify-content: center;
    flex-wrap: wrap;
    width: 340px;
    top: 160px;
    left: -170px;
  }

  .logo {
    background-size: auto 60px !important;
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
    margin: 20px 0;
  }

  .icon {
    width: 60px;
    height: 60px;
    font-size: 30px;
    color: $white;
    margin: 20px 0;
    text-align: center;
  }
}
.first {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid rgb(14, 17, 17);
  transform: rotateY(0deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;

  .text {
    color: $white;
  }
}
.second {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid rgb(0, 204, 255);
  transform: rotateY(90deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;
}
.third {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid rgb(14, 17, 17);
  transform: rotateY(180deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;

  .text {
    color: $white;
  }
}
.fourth {
  border-left: 311px solid transparent;
  border-right: 311px solid transparent;
  border-bottom: 500px solid rgb(0, 204, 255);
  transform: rotateY(-90deg) translateZ(155.5px) rotate3d(1, 0, 0, 38.49deg);
  z-index: 13;
}
.base {
  background-color: rgb(0, 0, 0);
  bottom: 0;
  height: 100%;
  width: 100%;
  transform: rotateX(-90deg) translateZ(196px);
  z-index: 13;

  .text {
    color: $white;
  }
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
    -ms-transform: rotateY(90deg) rotateX(13deg);
    -moz-transform: rotateY(90deg) rotateX(13deg);
    -webkit-transform: rotateY(90deg) rotateX(13deg);
    -o-transform: rotateY(90deg) rotateX(13deg);
    transform: rotateY(90deg) rotateX(13deg);
  }
  50% {
    -ms-transform: rotateY(180deg) rotateX(0deg);
    -moz-transform: rotateY(180deg) rotateX(0deg);
    -webkit-transform: rotateY(180deg) rotateX(0deg);
    -o-transform: rotateY(180deg) rotateX(0deg);
    transform: rotateY(180deg) rotateX(0deg);
  }
  75% {
    -ms-transform: rotateY(270deg) rotateX(-13deg);
    -moz-transform: rotateY(270deg) rotateX(-13deg);
    -webkit-transform: rotateY(270deg) rotateX(-13deg);
    -o-transform: rotateY(270deg) rotateX(-13deg);
    transform: rotateY(270deg) rotateX(-13deg);
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
