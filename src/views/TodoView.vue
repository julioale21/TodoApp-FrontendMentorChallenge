<template>
  <div class="todo-app">
    <div
      class="todo-app-header d-flex justify-content-between align-items-center"
    >
      <h1 class="todo-app-title">TODO</h1>
      <span role="button" v-if="theme === 'dark'" @click="toggleTheme('light')">
        <img width="20" src="../assets/icon-sun.svg" />
      </span>
      <span v-else role="button" @click="toggleTheme('dark')">
        <img width="20" src="../assets/icon-moon.svg" />
      </span>
    </div>

    <TodoList />
  </div>
</template>

<script>
import { inject, provide, ref, watchEffect } from "vue";
import TodoList from "../components/todo/TodoList";

export default {
  name: "TodoView",
  components: { TodoList },
  setup() {
    const todos = ref([]);
    const theme = inject("theme");

    if (localStorage.getItem("todos")) {
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }

    todos.value = [{ name: "sadfasdfasdfa", completed: true, id: 43124124132 }];

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
/* TodoApp */
.todo-app {
  margin-top: -10rem;
}

.todo-app-title {
  color: var(--light-grayish-blue-hover-color);
  letter-spacing: 1rem;
  font-weight: 700;
}

.todo-app-header {
  margin-bottom: 1rem;
}

.todo-form {
  background-color: var(--very-dark-desaturated-blue-color);
  padding: 0;
  padding-bottom: 0.5rem;
  border-radius: 5px;
}

.todo-form-body {
  height: 100%;
}

.todo-form-input {
  font-size: 0.8rem;
}

.todo-form input {
  background-color: var(--very-dark-desaturated-blue-color);
  border: none;
  height: 2rem;
  padding-left: 0;
  color: var(--dark-grayish-blue-color);
  margin-right: 1rem;
  width: 100%;
  outline: none;
}

@media screen and (min-width: 1440px) {
  .todo-app {
    margin-top: -14.5rem;
  }

  .todo-app-header {
    margin-bottom: 3rem;
  }

  .todo-form {
    height: 4rem;
  }

  .todo-form-input {
    font-size: 1rem;
  }
}
</style>
