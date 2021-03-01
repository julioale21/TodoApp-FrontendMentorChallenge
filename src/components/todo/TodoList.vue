<template>
  <draggable class="todo-list dragArea" :list="todosFiltered">
    <TodoItem
      id="todo-item"
      v-for="todo in todosFiltered"
      :key="todo.id"
      :todo="todo"
    />
  </draggable>
</template>

<script>
import { computed, inject } from "vue";
import TodoItem from "./TodoItem.vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "TodoList",
  components: {
    draggable: VueDraggableNext,
    TodoItem
  },
  setup() {
    const todos = inject("todos");
    const status = inject("status");

    const todosFiltered = computed(() => {
      if (status.value === "active") {
        return todos.value.filter(todo => todo.completed === false);
      }
      if (status.value === "completed") {
        return todos.value.filter(todo => todo.completed === true);
      }

      return todos.value;
    });

    return {
      todos,
      todosFiltered
    };
  }
};
</script>

<style>
.todo-list {
  width: 100%;
  min-width: 327px;
  padding-left: 0;
}
.todo-control {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.drag-message {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  color: var(--dark-grayish-blue-color);
  font-size: 0.8rem;
}
@media screen and (min-width: 768px) {
  .todo-list {
    min-width: 541px;
    border-radius: 5px;
  }
}
</style>
