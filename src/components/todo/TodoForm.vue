<template>
  <form class="todo-form mb-4" @submit.prevent="sendForm">
    <CheckedIcon />
    <input
      type="text"
      class="todo-form-input"
      :class="theme"
      placeholder="Create a new todo..."
      v-model.trim="todoName"
    />
  </form>
</template>

<script>
import CheckedIcon from "../shared/ChekedIcon";
import { inject, ref } from "vue";
export default {
  name: "TodoForm",
  components: { CheckedIcon },
  setup() {
    const todos = inject("todos");
    const todoName = ref("");

    const sendForm = () => {
      if (todoName.value === "") {
        return;
      }
      const todo = {
        name: todoName.value,
        completed: false,
        id: Date.now()
      };
      todos.value.push(todo);
      todoName.value = "";
    };
    return {
      sendForm,
      todoName
    };
  }
};
</script>

<style scoped>
.todo-form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;
  height: 3.25rem;
  padding-right: 1rem;
  border-radius: 3px;
}

.todo-form-input {
  border: none;
  height: 2rem;
  padding-left: 0;
  color: var(--dark-grayish-blue-color);
  margin-right: 1rem;
  width: 100%;
  outline: none;
  font-size: 0.8rem;
}

@media screen and (min-width: 768px) {
  .todo-form {
    height: 4rem;
  }

  .todo-form-input {
    font-size: 1rem;
  }
}
</style>
