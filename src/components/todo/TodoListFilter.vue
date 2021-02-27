<template>
  <div
    class="d-flex justify-content-around align-items-center mt-3 mt-md-0 px-1 todo-filter"
  >
    <span
      role="button"
      @click="filter('all')"
      :class="{ active: status === 'all' }"
      class="mr-2"
    >
      <small>All</small>
    </span>
    <span
      role="button"
      @click="filter('active')"
      :class="{ active: status === 'active' }"
      class="mx-3"
    >
      <small>Active</small>
    </span>
    <span
      role="button"
      @click="filter('completed')"
      :class="{ active: status === 'completed' }"
      class="ml-2"
    >
      <small>Completed</small>
    </span>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "TodoFilter",
  setup() {
    const status = inject("status");

    const filter = value => {
      status.value = value;
    };
    return {
      status,
      filter
    };
  }
};
</script>

<style scoped>
.active {
  color: blue;
}
.todo-filter {
  color: hsl(234, 11%, 52%);
  padding: 0 3rem;
  height: 2.5rem;
  border-radius: 5px;
}
@media screen and (min-width: 768px) {
  .todo-filter {
    height: 1.8rem;
  }
}
</style>
