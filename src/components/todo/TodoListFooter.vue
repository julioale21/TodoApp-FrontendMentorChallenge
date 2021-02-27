<template>
  <li
    class="todo-footer d-flex justify-content-between align-items-center px-2"
  >
    <span>{{ countActives }} items left</span>

    <TodoListFilter class="d-none d-lg-block" />

    <span @click="deleteCompleted" role="button">
      Clear completed
    </span>
  </li>
</template>

<script>
import { computed, inject } from "vue";
import TodoListFilter from "./TodoListFilter.vue";
export default {
  components: { TodoListFilter },
  name: "TodoFooter",
  setup() {
    const todos = inject("todos");
    const countActives = computed(() => {
      return todos.value.filter(todo => todo.completed === false).length;
    });
    const deleteCompleted = () => {
      todos.value = todos.value.filter(todo => todo.completed === false);
    };
    return {
      countActives,
      deleteCompleted
    };
  }
};
</script>

<style scoped>
.todo-footer {
  color: hsl(234, 11%, 52%);
  height: 2.5rem;
}
.todo-footer span {
  font-size: 0.8rem;
  color: hsl(234, 39%, 85%);
}
@media screen and (min-width: 768px) {
  .todo-footer span {
    font-size: 1rem;
  }
}
</style>
