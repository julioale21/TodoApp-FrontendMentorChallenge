<template>
  <div class="d-flex flex-column">
    <div
      class="app-header"
      :class="[
        theme.value === 'dark' ? 'app-header-bg-dark' : 'app-header-bg-light'
      ]"
    ></div>
    <div class="todo-body">
      <TodoView />
    </div>
  </div>
</template>

<script>
import TodoView from "./views/TodoView";
import { provide, ref } from "vue";
export default {
  name: "App",
  components: { TodoView },
  setup() {
    const theme = ref("dark");

    if (localStorage.getItem("theme")) {
      theme.value = JSON.parse(localStorage.getItem("theme"));
    }
    provide("theme", theme);
    return {
      theme
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
:root {
  /* Dark Theme */
  --first-color: hsl(220, 98%, 61%);
  --very-dark-blue-color: hsl(235, 21%, 11%);
  --very-dark-desaturated-blue-color: hsl(235, 24%, 19%);
  --light-grayish-blue-color: hsl(234, 39%, 85%);
  --light-grayish-blue-hover-color: hsl(236, 33%, 92%);
  --dark-grayish-blue-color: hsl(234, 11%, 52%);
  --very-dark-grayish-blue-color: hsl(233, 14%, 35%);
  --very-dark-grayish-blue-color: hsl(237, 14%, 26%);
  /* Light Theme */
  --very-light-gray-color: hsl(0, 0%, 98%);
  --very-light-grayish-blue-color: hsl(236, 33%, 92%);
  --light-grayish-blue-hover-color: hsl(233, 11%, 84%);
  --dark-grayish-blue-color: hsl(236, 9%, 61%);
  --very-dark-grayish-blue-color: hsl(235, 19%, 35%);

  --font: "Josefin Sans", sans-serif;
}
body {
  font-family: Josefin Sans;
  font-size: 18px;
}
.todo-body {
  background-color: black;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.app-header {
  height: 27vh;
}
.header-light-bg {
  background-image: url("./assets/bg-mobile-light.jpg");
}
.app-header-bg-dark {
  background-image: url("./assets/bg-mobile-dark.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.app-header-bg-light {
  background-image: url("./assets/bg-mobile-light.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
@media screen and (min-width: 1440px) {
  .app-header-bg-dark {
    background-image: url("./assets/bg-mobile-dark.jpg");
  }
  .app-header-bg-light {
    background-image: url("./assets/bg-mobile-light.jpg");
  }
  .app-header {
    height: 43vh;
  }
}
.desktop {
  size: 1440px;
}
.mobile {
  size: 375px;
}
</style>
