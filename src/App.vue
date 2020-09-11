<template>
  <div id="app" @scroll="handleScroll">
    <Nav/>
    <LeftSide :image="{
      src: '',
      alt: 'A showcase image'
    }" />
    <RightSide />
  </div>
</template>

<script>
import Nav from './components/Nav/Nav';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

export default {
  name: 'App',
  components: {
    Nav,
    LeftSide,
    RightSide
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
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

    .left-side {
        height: 100vh;
        width: 50vw;
        background-color: crimson;
        background-color: rgb(216, 35, 71);
        position: fixed;
    }
    .right-side {
        min-height: 100vh;
        width: 50vw;
        background-color: #fff6ec;
        // background-color: #222222;
        position: relative;
        left: 50vw;
    }
}
</style>
