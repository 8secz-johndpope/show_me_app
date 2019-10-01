<template>
  <div id="app">
    <router-view/>
      <div class="wrapper">
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  height: 100%;
  padding: 0%;
}
#app {

  height: 100%;
}

.wrapper{
    min-height: 100％;
    margin-bottom: 0%
}

footer{
    /*footerの装飾*/
    width: 100%;
    background-color: #89c7de;
    color: #fff;
    text-align: center;
    margin: 0%;
    padding-bottom: 0%
}
</style>
