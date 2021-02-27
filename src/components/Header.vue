<template>
  <div class="app-header">
    <div class="todo-content-header">
      <h1 class="todo-content-title">TODO</h1>
      <span role="button" v-if="theme === 'dark'" @click="toggleTheme('light')">
        <img width="20" alt="icon-sun" src="../assets/icon-sun.svg" />
      </span>
      <span v-else role="button" @click="toggleTheme('dark')">
        <img width="20" alt="icon-moon" src="../assets/icon-moon.svg" />
      </span>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Header",
  setup() {
    const theme = inject("theme");

    const toggleTheme = value => {
      theme.value = value;
    };
    return {
      theme,
      toggleTheme
    };
  }
};
</script>

<style>
.app-header {
  height: 27vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.todo-content-header {
  width: 327px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 6rem;
}

.todo-content-title {
  letter-spacing: 1rem;
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .app-header {
    height: 43vh;
  }
  .todo-content-header {
    width: 541px;
    margin-bottom: 7rem;
  }
}
</style>
