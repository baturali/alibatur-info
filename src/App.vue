<template>
  <div id="app">
    <video autoplay muted loop>
      <source src="@/assets/cosmos.mp4" type="video/mp4" />
    </video>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
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
      this.$store.dispatch('setResumeStatus', true)
    }

    return false
  }
}
</script>
