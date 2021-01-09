<template>
  <div class="container" :class="`footer-bg${backgroundNumber}`">
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
        <span>+90 5301478079</span>
        <i class="fas fa-phone-square"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    backgroundNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: $footerHeight;
  position: fixed;
  background-color: rgba(0, 204, 255, 0.93);
  bottom: 0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  .email {
    display: flex;
    justify-content: center;
    width: 230px;
    z-index: 2;

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
    z-index: 2;

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
    z-index: 2;

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
.footer-bg0::before,
.footer-bg0::after {
  background-color: $black;
}
.footer-bg1::before,
.footer-bg1::after {
  background-color: $black;
}
.footer-bg2::before,
.footer-bg2::after {
  background-color: $white;
}
.footer-bg3::before,
.footer-bg3::after {
  background-color: $black;
}
.container::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: -30px;
  top: -1px;
  width: 60px;
  height: 60px;
  transform: skew(-45deg);
  z-index: 2;
}
.container::after {
  content: '';
  display: inline-block;
  position: absolute;
  right: -30px;
  top: -1px;
  width: 60px;
  height: 60px;
  transform: skew(45deg);
  z-index: 2;
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
