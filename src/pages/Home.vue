<template>
  <section id="homepage">
    <Resume />
    <video autoplay muted loop>
      <source src="@/assets/cosmos.mp4" type="video/mp4" />
    </video>
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
