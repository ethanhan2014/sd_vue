<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h4>Welcome.</h4>
    <CurrentPage></CurrentPage>
    <h4>Successfully</h4>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage';

  export default {
    components: {
      CurrentPage,
    },
    name: 'graph-page',
  };
</script>
