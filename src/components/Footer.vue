<template>
  <div class="container">
    <div class="email">
      <a href="mailto:aliberkbatur@gmail.com">
        aliberkbatur@gmail.com
      </a>
    </div>
    <div class="social">
      <a href="https://github.com/baturali" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/alibatur/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/baturalib" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    <div class="language">
      <div class="lang-btn">
        TR
      </div>
      <div class="lang-btn">
        EN
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: $footerHeight;
  background-color: rgba(0, 204, 255, 0.93);
  position: fixed;
  bottom: 0;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .email {
    display: flex;
    justify-content: center;
    width: 200px;

    a {
      color: $black;
      font-family: $fontSemi;
    }
  }

  .social {
    display: flex;
    justify-content: center;
    position: absolute;

    a {
      color: $black;
      transition: color 0.2s ease;

      .svg-inline--fa {
        font-size: 27px !important;
        margin: 1rem;
      }
    }
    a:hover {
      color: $white;
    }
  }

  .language {
    display: flex;
    justify-content: center;
    width: 200px;

    .lang-btn {
      border: 3px solid $black;
      border-radius: 15px;
      cursor: pointer;
      display: flex;
      font-family: $fontBold;
      justify-content: center;
      margin: 5px;
      width: 40px;
    }
  }
}
</style>
