<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 16px;
}
a {
  text-decoration: none;
}
li{
  list-style: none;
}
#app {
  font-family: "SourceHanSansCN-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100%;
  height: 100%;
}
</style>
