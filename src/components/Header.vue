<template>
  <div
    class="app-header"
    :class="[theme === 'dark' ? 'app-header-bg-dark' : 'app-header-bg-light']"
  ></div>
</template>

<script>
export default {
  name: "Header",
  props: {
    theme: {
      type: String,
      default: "dark",
      validation(value) {
        return ["dark", "light"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style>
.app-header {
  height: 27vh;
}
.app-header-bg-dark {
  background-image: url("../assets/bg-mobile-dark.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.app-header-bg-light {
  background-image: url("../assets/bg-mobile-light.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
@media screen and (min-width: 1440px) {
  .app-header-bg-dark {
    background-image: url("../assets/bg-desktop-dark.jpg");
  }
  .app-header-bg-light {
    background-image: url("../assets/bg-desktop-light.jpg");
  }
  .app-header {
    height: 43vh;
  }
}
</style>
