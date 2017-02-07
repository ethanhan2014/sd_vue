<style scoped>
  img {
    margin-top: -50px;
    width: 300px;
  }
</style>

<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h4>Welcome.</h4>
    <CurrentPage></CurrentPage>
    <Sysform></Sysform>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage';
  import Sysform from './LandingPageView/Sysform';

  export default {
    components: {
      CurrentPage,
      Sysform,
    },
    name: 'landing-page',
  };
</script>
