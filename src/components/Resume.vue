<template>
  <div
    :class="{ visible: isResumeVisible }"
    class="container"
    @click="hideResume(false)"
  >
    <div class="resume-wrapper">
      <img src="@/assets/docs/Ali_BBatur_Resume.png" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isResumeVisible: 'resumeVisibilityGetter'
    })
  },
  methods: {
    hideResume(bool) {
      this.$store.dispatch('setResumeStatus', bool)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  z-index: 13;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20vw;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: left 0.4s ease-in-out, opacity 0.5s ease-in-out;

  .resume-wrapper {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
.visible {
  left: 0 !important;
  opacity: 1 !important;
}

@media only screen and (max-width: 1025px) {
  .container {
    padding: 1vw !important;
  }
}
</style>
