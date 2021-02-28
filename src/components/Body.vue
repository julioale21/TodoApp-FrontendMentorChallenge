<template>
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
</template>

<script>
import { inject } from "vue";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm.vue";
import TodoListFooter from "../components/todo/TodoListFooter";
import TodoListFilter from "../components/todo/TodoListFilter";

export default {
  components: { TodoList, TodoForm, TodoListFooter, TodoListFilter },
  setup() {
    const todos = inject("todos");

    return { todos };
  }
}
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
