<template>
  <div id="app">
    <router-view :currentPage="currentPage"/>
  </div>
</template>

<script>
import { globalState } from './Global';
export default {
  name: 'App',
  created() {
    // window.onscroll = this.handleScroll;
    document.body.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // console.log('body scrolling');
      const docBody = document.body;
      let pageHeight = window.innerHeight * .9;
      let currentScroll = docBody.scrollTop;
      // Pages are 90vh
      let currentPage = Math.floor(currentScroll / pageHeight);
      if (currentPage !== this.prevPage) {
        console.log('prevPage: ', this.prevPage);
        console.log('page is now: ', currentPage);
        this.prevPage = currentPage;
        this.currentPage = currentPage;
        globalState.setCurrentPage(currentPage);
      }
    },
    throttleAction(action, input) {
      setTimeout(() => {
        this.handleColorChange(input)
      },100)
    },
    handleColorChange(currentPage) {
        const colorVars = globalState.caseStudies[currentPage  - 1].colors;
        if (currentPage === 0) {
          document.documentElement.style.setProperty('--leftSide-bgColor', 'crimson');
          document.documentElement.style.setProperty('--nav-bgColor', 'crimson');
          document.documentElement.style.setProperty('--nav-borderColor', 'white');
          document.documentElement.style.setProperty('--nav-textColor', 'white');
        } else {
          document.documentElement.style.setProperty('--leftSide-bgColor', colorVars.bgColor);
          document.documentElement.style.setProperty('--nav-bgColor', colorVars.bgColor);
          document.documentElement.style.setProperty('--nav-borderColor', colorVars.navBorderColor);
          document.documentElement.style.setProperty('--nav-textColor', colorVars.navTextColor);
        }
    }
  },
  watch: {
      currentPage: function(newVal) {
        this.throttleAction(this.handleColorChange, newVal);
      }
  },
  data: function() {
      return {
        prevPage: 0,
        currentPage: 0,
        animationRunning: false
      }
    }
}

</script>

<style lang="scss">
html {
  overflow: hidden;
  scroll-behavior: smooth;
}

:root {
  --leftSide-bgColor: crimson;
  --rightSide-bgColor: white;
  --nav-bgColor: crimson;
  --nav-borderColor: white;
  --nav-textColor: white;
}

body {
  width: 100%;
  height: 100vh;
  position: fixed;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;

  .page-container {
    .left-side {
        height: 100vh;
        width: 50vw;
        background-color: crimson;
        background-color: var(--leftSide-bgColor);
        position: fixed;
    }
    .right-side {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 50vw;
      transition: 2s ease-in-out;
      background-color: var(--rightSide-bgColor);
      // background-color: #222222;
      position: relative;
      left: 50vw;
    }
    @media (max-width: 750px) {
      flex-direction: column-reverse;
      nav {
        position: fixed;
        top: 0vh;
        width: 100vw;
        &:after {
          display: none;
        }
      }
      .left-side {
        height: 25vh;
        width: 100vw;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 5;
        .carousel {
          pointer-events: none;
          padding: 5px;
          figure {
            margin-top: 0px;
            .img-container {
              img {
                border-radius: 5px;
              }
            }
          }
        }
      }
      .right-side {
        width: 100vw;
        top: 0vh;
        left: 0vw;
        margin-bottom: 25vh;
      }
    }
  }
}
</style>
