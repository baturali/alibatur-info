<template>
  <div id="app">
    <Resume />
    <video autoplay muted loop>
      <source src="@/assets/cosmos.mp4" type="video/mp4" />
    </video>
    <AboutMe msg="About Me" />
    <Footer />
  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import Footer from './components/Footer.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'app',
  components: {
    AboutMe,
    Footer,
    Resume
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
