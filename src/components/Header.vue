<template>
  <div
    class="app-header"
    :class="[theme === 'dark' ? 'app-header-bg-dark' : 'app-header-bg-light']"
  >
    <div class="todo-content-header">
      <h1 class="todo-content-title">TODO</h1>
      <span role="button" v-if="theme === 'dark'" @click="toggleTheme('light')">
        <img width="20" src="../assets/icon-sun.svg" />
      </span>
      <span v-else role="button" @click="toggleTheme('dark')">
        <img width="20" src="../assets/icon-moon.svg" />
      </span>
    </div>
  </div>
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
  },
  methods: {
    toggleTheme(value) {
      this.$emit("toggleTheme", value);
    }
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
  margin-bottom: 4rem;
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
  }
}
</style>
