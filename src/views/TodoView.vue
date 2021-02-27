<template>
  <div class="d-flex flex-column">
    <Header />

    <div class="todo-body">
      <div class="todo-content d-flex flex-column align-items-center">
        <TodoForm :theme="theme" />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, watchEffect } from "vue";
import Header from "../components/Header";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm.vue";

export default {
  name: "TodoView",
  components: { Header, TodoList, TodoForm },
  setup() {
    const todos = ref([]);

    if (localStorage.getItem("todos")) {
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }

    todos.value = [
      { name: "sadfasdfasdfa", completed: true, id: 43124124132 },
      { name: "sadfasdfsadfasdfa", completed: false, id: 43124454132 },
      { name: "sadfasdfsdafsadfsdafasdfa", completed: true, id: 43124784132 }
    ];

    watchEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    });

    provide("todos", todos);
  }
};
</script>

<style scoped>
.todo-body {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.todo-content {
  margin-top: -6.5rem;
  min-width: 328px;
}

.todo-content-title {
  color: var(--light-grayish-blue-hover-color);
  letter-spacing: 1rem;
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .todo-content {
    min-width: 541px;
    margin-top: -9rem;
  }
}
</style>
