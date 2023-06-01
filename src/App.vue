<template>
  <div>
    <img src="./assets/logo.png">
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue';

export default {
  name: 'App',
  components: {
    LoginComponent
  }
}
</script>

<style>
body {
  background-color: rgb(250, 252, 146);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #35495e;
  margin-top: 60px;
}
</style>
