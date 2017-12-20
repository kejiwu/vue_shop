<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
  
<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 750px;
}
li,ul,p,span,dd,dt,dl,a,body{
  padding: 0;
  margin: 0;
}
li{
  list-style: none; 
  text-decoration: none;
}
a{
  text-decoration: none;
}
</style>
