<template>
  <div id="app">
    <br>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <br>
  </div>
</template>

<script>
export default {
  name:"app",
  mounted(){
    console.log("done!!");
    document.getElementById("loader").style.display = "none";
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
