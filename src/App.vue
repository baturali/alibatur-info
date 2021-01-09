<template>
  <div id="app">
    <!-- <video autoplay muted loop>
      <source src="@/assets/cosmos.mp4" type="video/mp4" />
    </video> -->
    <router-view />
    <div class="background" :class="`background${backgroundNumber}`" />
    <Footer :background-number="backgroundNumber" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data: () => ({
    backgroundNumber: 0
  }),
  components: {
    Footer
  },
  beforeCreate() {
    const ua = window.navigator.userAgent
    const msie = ua.indexOf('MSIE ')

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./)) {
      // If IE, send them to download a proper one!
      alert(
        'You reaally need to a proper Web Browser.\nRedirecting to download.'
      )
      window.location.href = 'https://brave.com/'
    }
  },
  beforeMount() {
    const lsValue = parseInt(localStorage.getItem('backgroundNumber'))
    const newNumber = this.getRandomInt(3)
    if (lsValue !== newNumber) {
      this.backgroundNumber = newNumber
      localStorage.setItem('backgroundNumber', newNumber)
    } else {
      this.recurse()
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    recurse() {
      const lsValue = parseInt(localStorage.getItem('backgroundNumber'))
      const changedNumber = this.getRandomInt(3)
      if (lsValue !== changedNumber) {
        this.backgroundNumber = changedNumber
        localStorage.setItem('backgroundNumber', changedNumber)
      } else {
        this.recurse()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -1;
}
.background0 {
  background-image: url('~@/assets/backgrounds/background0.jpg');
}
.background1 {
  background-image: url('~@/assets/backgrounds/background1.jpg');
}
.background2 {
  background-image: url('~@/assets/backgrounds/background2.jpg');
}
</style>
