<template>
  <div class="d-flex flex-column">
    <Header :theme="theme" />

    <div class="todo-body">
      <div class="todo-content d-flex flex-column align-items-center">
        <div class="todo-content-header">
          <h1 class="todo-content-title">TODO</h1>
          <span
            role="button"
            v-if="theme === 'dark'"
            @click="toggleTheme('light')"
          >
            <img width="20" src="../assets/icon-sun.svg" />
          </span>
          <span v-else role="button" @click="toggleTheme('dark')">
            <img width="20" src="../assets/icon-moon.svg" />
          </span>
        </div>

        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, ref, watchEffect } from "vue";
import Header from "../components/Header";
import TodoList from "../components/todo/TodoList";

export default {
  name: "TodoView",
  components: { Header, TodoList },
  setup() {
    const todos = ref([]);
    const theme = inject("theme");

    if (localStorage.getItem("todos")) {
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }

    todos.value = [
      { name: "sadfasdfasdfa", completed: true, id: 43124124132 },
      { name: "sadfasdfsadfasdfa", completed: false, id: 43124454132 },
      { name: "sadfasdfsdafsadfsdafasdfa", completed: true, id: 43124784132 }
    ];

    const toggleTheme = value => {
      theme.value = value;
    };

    watchEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos.value));
      localStorage.setItem("theme", JSON.stringify(theme.value));
    });

    provide("todos", todos);
    return {
      theme,
      toggleTheme
    };
  }
};
</script>

<style scoped>
.todo-body {
  background-color: black;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.todo-content {
  margin-top: -6rem;
  min-width: 328px;
}

.todo-content-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 4rem;
}

.todo-content-title {
  color: var(--light-grayish-blue-hover-color);
  letter-spacing: 1rem;
  font-weight: 700;
}

@media screen and (min-width: 1440px) {
  .todo-content {
    min-width: 541px;
  }
}
</style>
