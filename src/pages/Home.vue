<template>
  <section id="homepage">
    <Resume />
    <AboutMe msg="About Me" />
  </section>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Resume from '../components/Resume.vue'

export default {
  name: 'Home',
  components: {
    AboutMe,
    Resume
  }
}
</script>
