<template>
  <div class="container">
    <div class="email">
      <a href="mailto:aliberkbatur@gmail.com">
        <i class="fas fa-paper-plane"></i>
        <span>aliberkbatur@gmail.com</span>
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
    <div class="phone">
      <a href="tel:+905301478079" class="number">
        <span>+90 530 147 8079</span>
        <i class="fas fa-phone-square"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {}
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
    width: 230px;

    a {
      align-items: center;
      color: $black;
      display: flex;

      span {
        font-family: $fontSemi;
        margin-left: 7px !important;
      }
    }
  }

  .social {
    display: flex;
    justify-content: center;
    position: absolute;

    a {
      align-items: center;
      color: $black;
      display: flex;
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

  .phone {
    display: flex;
    justify-content: center;
    width: 230px;

    .number {
      align-items: center;
      cursor: pointer;
      color: $black;
      display: flex;
      font-family: $fontSemi;
      text-decoration: none;
      justify-content: center;

      span {
        margin-right: 7px;
      }
      .svg-inline--fa {
        font-size: 18px !important;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .container {
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 93px;

    > .email,
    > .social,
    > .phone {
      padding: 0 !important;
      margin: 0 !important;
    }
    .phone {
      margin-bottom: 19px !important;

      .number > span {
        margin-right: -2px !important;
      }
      .number > .svg-inline--fa {
        font-size: 16px !important;
        margin: 0 !important;
        margin-left: 10px !important;
      }
    }
    .social {
      .svg-inline--fa {
        margin: 0 17px !important;
      }
    }
    .email {
      margin-top: 19px !important;

      a > span {
        margin-left: -2px !important;
      }
      .svg-inline--fa {
        margin: 0 !important;
        margin-right: 10px !important;
      }
    }
  }
}

@media only screen and (max-width: 465px) {
  .container {
    background-color: rgba(0, 204, 255, 1) !important;
    font-size: 12px !important;
  }
}
</style>
