<template>
  <div class="about-me">
    <div class="inline-wrapper">
      <div class="who-i-am">
        <h1>Ali Berk Batur</h1>
        <span>Front End Developer</span>
      </div>
      <div class="triangle"></div>
      <div class="horus"></div>
      <div class="information">
        <div class="picture">
          <img src="@/assets/ali-batur.png" />
        </div>
        <div class="summary">
          I was born in Istanbul in 1993, I made and involved many projects of
          Front-End since 2013. HTML-XHTML coding, CSS3 designing and
          animations, Responsive and Cross-Browser adaptability, JavaScript
          developing, also since few years working with Vue.js and React.js. My
          priority about design is following the web-tecnologies up to date and
          thanks to that designing the websites in a very interactive way by the
          help of flow and the discrepancy principles.
        </div>
        <div class="resume">
          Click here to view my resume!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about-me {
  align-items: center;
  display: flex;
  position: fixed;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  min-height: calc(100vh - #{$footerHeight});
  top: 0;
  padding: 20px;

  .inline-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    height: 66vh;
    margin-top: 100px;

    .who-i-am {
      text-align: center;
      position: absolute;
      top: -100px;

      h1 {
        letter-spacing: 2px;
        font-family: $fontBold;
      }

      span {
        color: #00ccff;
        letter-spacing: 1px;
      }
    }
    .triangle {
      border-left: 38vh solid transparent;
      border-right: 38vh solid transparent;
      border-bottom: 66vh solid rgba(0, 0, 0, 0.93);
      width: 0vh;
      z-index: 1;
    }

    .horus {
      border-left: 8vh solid transparent;
      border-right: 8vh solid transparent;
      border-bottom: 14vh solid rgba(0, 204, 255, 0.93);
      position: absolute;
      top: 0;
      z-index: 6;
    }

    .information {
      color: $white;
      align-items: center;
      display: flex;
      justify-content: center;
      font-family: $font;
      font-size: 13px;
      position: absolute;
      max-width: 60%;
      height: 100%;
      z-index: 3;

      .picture {
        width: 100px;
        height: 100px;
        position: absolute;
        margin-top: -45px;
      }

      .summary {
        margin-top: 270px;
        text-align: center;
      }

      .resume {
        position: absolute;
        bottom: 50px;
        color: $mainColor;
        cursor: pointer;
        font-family: $fontSemi;
        font-size: 16px;
        text-decoration: underline;
      }
    }
  }
}
</style>
