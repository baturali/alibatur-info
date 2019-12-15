<template>
  <div id="app">
    <video autoplay muted loop>
      <source src="@/assets/cosmos.mp4" type="video/mp4" />
    </video>
    <AboutMe msg="About Me" />
    <Footer />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    AboutMe,
    Footer
  }
};
</script>
