<template>
  <div class="d-flex flex-column">
    <Header />
    <Body />
  </div>
</template>

<script>
import { provide, ref, watchEffect } from "vue";
import Header from "../components/Header";
import Body from "../components/Body";

export default {
  name: "TodoView",
  components: { Header, Body },
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
