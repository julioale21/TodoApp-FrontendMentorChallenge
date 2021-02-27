<template>
  <draggable class="todo-list dragArea" :list="todos">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </draggable>
  <div v-if="todosAll.length" class="todo-control">
    <TodoListFooter />
    <TodoListFilter class="d-md-none" />
  </div>
  <div>
    <span v-if="todos.length" class="drag-message">
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
    const todosAll = inject("todos");
    const status = ref("all");

    const todos = computed(() => {
      if (status.value === "active") {
        return todosAll.value.filter(todo => todo.completed === false);
      }
      if (status.value === "completed") {
        return todosAll.value.filter(todo => todo.completed === true);
      }

      return todosAll.value;
    });
    provide("status", status);
    return {
      todosAll,
      todos
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
