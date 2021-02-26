<template>
  <div>
    <TodoView />
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

html {
  box-sizing: border-box;
  font-family: var(--font);
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  overflow-x: hidden;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
}

h3 {
  margin: 0;
  font-size: 1.25rem;
}

h4 {
  margin: 0;
  font-size: 1rem;
}

h5 {
  margin: 0;
  font-size: 0.85rem;
}

h6 {
  margin: 0;
  font-size: 0.7rem;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  line-height: 1.6;
}

body {
  font-family: Josefin Sans;
  font-size: 18px;
}
</style>
