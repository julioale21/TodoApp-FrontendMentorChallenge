<template>
  <div>
    <draggable class="todo-list dragArea" :list="todosFiltered">
      <todo-item
        id="todo-item"
        v-for="todo in todosFiltered"
        :key="todo.id"
        :todo="todo"
      />
    </draggable>
    <div v-if="todos.length" class="todo-control">
      <TodoListFooter />
      <TodoListFilter class="d-md-none" />
    </div>

    <span v-if="todosFiltered && todosFiltered.length" class="drag-message">
      <small>Drag and drop to reorder list</small>
    </span>
  </div>
</template>

<script>
import { computed, inject, provide, ref } from "vue";
import TodoItem from "./TodoItem.vue";
import TodoListFooter from "./TodoListFooter";
import TodoListFilter from "./TodoListFilter";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "TodoList",
  components: {
    draggable: VueDraggableNext,
    TodoItem,
    TodoListFooter,
    TodoListFilter
  },
  setup() {
    const todos = inject("todos");
    const status = ref("all");

    const todosFiltered = computed(() => {
      if (status.value === "active") {
        return todos.value.filter(todo => todo.completed === false);
      }
      if (status.value === "completed") {
        return todos.value.filter(todo => todo.completed === true);
      }

      return todos.value;
    });
    provide("status", status);
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
