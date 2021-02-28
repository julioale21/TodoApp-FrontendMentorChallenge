<template>
  <div class="d-flex flex-column">
    <Header />

    <div class="todo-body">
      <div class="todo-content d-flex flex-column align-items-center">
        <TodoForm />
        <TodoList />

        <div v-if="todos.length" class="todo-control">
          <TodoListFooter />
          <TodoListFilter class="d-md-none" />
        </div>

        <span v-if="todos.length" class="drag-message">
          <small>Drag and drop to reorder list</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, watchEffect } from "vue";
import Header from "../components/Header";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm.vue";
import TodoListFooter from "../components/todo/TodoListFooter";
import TodoListFilter from "../components/todo/TodoListFilter";

export default {
  name: "TodoView",
  components: { Header, TodoList, TodoForm, TodoListFooter, TodoListFilter },
  setup() {
    const todos = ref([]);
    const status = ref("all");

    if (localStorage.getItem("todos")) {
      todos.value = JSON.parse(localStorage.getItem("todos"));
    }

    watchEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    });

    provide("todos", todos);
    provide("status", status);

    return {
      todos,
      status
    };
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
