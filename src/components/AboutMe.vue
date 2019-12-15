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
          <img src="@/assets/ali-batur.png" @click="setResumeVisible = true" />
        </div>
        <div class="summary">
          I was born in Istanbul in <br />
          1993. I've made and involved many <br />
          projects on the Front-End side since 2013. <br />
          <div class="mobile-remove">
            HTML coding, first-class citizen CSS3 designing and <br />
            animations, Responsive and Cross-Browser adaptability, <br />
            JavaScript developing, also since few years working with Vue
            <br />
            and React.
          </div>
          My priority about design is following the web-technologies
          <br />
          up to date and thanks to that designing the websites in a very
          interactive <br />
          way by the help of flow and the diversity principles. But AGILE first
          at all.
        </div>
        <div class="to-resume" @click="setResumeVisible = true">
          Click here to view my resume!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    setResumeVisible: {
      get() {
        return this.$store.state.isResumeOpened
      },
      set(bool) {
        this.$store.dispatch('setResumeStatus', bool)
      }
    }
  }
}
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
        color: $gray;
        letter-spacing: 2px;
        font-family: $fontBold;
        font-size: 40px;
        text-transform: uppercase;
        text-shadow: -2px 2px $black;
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
      max-width: 75%;
      height: 100%;
      z-index: 3;

      .picture {
        width: 100px;
        height: 100px;
        position: absolute;
        margin-top: -45px;

        img {
          max-width: 100%;
          height: auto;
          cursor: pointer;
        }
      }

      .summary {
        margin-top: 255px;
        text-align: center;

        .mobile-remove {
          display: inline;
        }
      }

      .to-resume {
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
@media only screen and (max-width: 767px) {
  .about-me {
    .inline-wrapper {
      margin-top: 34px;
      .triangle {
        border-left: 31vh solid transparent;
        border-right: 31vh solid transparent;
        border-bottom: 63vh solid rgba(0, 0, 0, 0.93);
      }
      .horus {
        border-left: 5.8vh solid transparent;
        border-right: 5.8vh solid transparent;
        border-bottom: 12vh solid rgba(0, 204, 255, 0.93);
        position: absolute;
        top: 11px;
      }
      .information {
        max-width: 55vw;

        .picture {
          margin-top: -93px;
          height: 93px;
          width: 93px;
        }
        .summary {
          font-size: 11px;
          margin-top: 200px;

          br {
            display: none;
          }
          .first-one {
            display: block !important;
          }
        }
        .to-resume {
          bottom: 27px;
        }
      }
    }
  }
}

@media only screen and (max-width: 465px) {
  .mobile-remove {
    display: none !important;
  }
  .about-me {
    .inline-wrapper {
      margin-top: 50px;

      .who-i-am {
        margin-top: 27px;
      }

      .triangle {
        border-left: 50vw solid transparent;
        border-right: 50vw solid transparent;
        border-bottom: 55vh solid rgba(0, 0, 0, 0.93);
      }
      .horus {
        border-left: 8vw solid transparent;
        border-right: 8vw solid transparent;
        border-bottom: 9vh solid rgba(0, 204, 255, 0.93);
        position: absolute;
        top: 40px;
      }
      .information {
        max-width: 59vw;

        .picture {
          margin-top: -53px;
        }
        .summary {
          margin-top: 190px;
        }
        .to-resume {
          bottom: 55px;
          font-size: 14px;
          text-align: center;
          width: 120%;
          margin-left: 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 376px) {
  // Fix for iphone 6-7-8
  .to-resume {
    bottom: 0px !important;
  }
  .horus {
    top: 38px !important;
  }
}
@media only screen and (max-width: 370px) {
  .horus {
    top: 35px !important;
  }

  .to-resume {
    bottom: 0 !important;
  }
}
@media only screen and (max-width: 325px) {
  .horus {
    top: 32px !important;
  }
  .who-i-am {
    margin-top: 40px !important;
    width: 100% !important;

    h1 {
      font-size: 34px !important;
    }
  }
  .information {
    max-width: 80vw !important;

    .picture {
      margin-top: 13px !important;
    }

    .summary {
      display: none;
    }
    .to-resume {
      margin-left: 0 !important;
      bottom: 77px !important;
      width: 300px !important;
    }
  }
}
</style>
