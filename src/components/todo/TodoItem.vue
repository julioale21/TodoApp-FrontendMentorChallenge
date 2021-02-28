<template>
  <div class="todo">
    <checked-icon :completed="todo.completed" />
    <li class="d-flex justify-content-between align-items-center p-0">
      <span
        :class="{ 'text-decoration-line-through': todo.completed }"
        @click="completeTodo(todo.id)"
        role="button"
      >
        {{ todo.name }}
      </span>
    </li>
    <span
      class="flex-shrink-0 delete-button"
      @click="deleteItem(todo.id)"
      role="button"
    >
      <i class="fas fa-times"></i>
    </span>
  </div>
</template>

<script>
import { inject } from "vue";
import CheckedIcon from "../shared/ChekedIcon";
export default {
  components: { CheckedIcon },
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup() {
    let todos = inject("todos");

    const deleteItem = id => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const completeTodo = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    };

    return {
      deleteItem,
      completeTodo
    };
  }
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  padding-right: 1rem;

  border-radius: 3px;
}

.todo li {
  color: var(--dark-grayish-blue-color);
  border: none;
  display: flex;
  flex: 1;
  overflow: hidden;
  max-height: 2.9rem;
}

.todo span {
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  height: 2.9rem;
}

.todo li:hover {
  color: var(--light-grayish-blue-hover-color);
}

@media screen and (min-width: 768px) {
  .todo {
    height: 4rem;
  }

  .todo span {
    font-size: 1rem;
  }
}

.delete-button {
  color: var(--very-dark-grayish-blue-color);
}
</style>
