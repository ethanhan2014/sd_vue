<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>

<template>
  <div>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store';

  export default {
    store,
  };
</script>
