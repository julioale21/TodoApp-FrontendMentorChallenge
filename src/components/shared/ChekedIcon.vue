<template>
  <div class="circle" :class="[completed ? 'check-bg' : 'uncheck-bg']">
    <img v-show="completed" alt="completed" src="../../assets/icon-check.svg" />
  </div>
</template>

<script>
export default {
  props: {
    completed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.circle {
  width: 20px;
  height: 20px;
  border: 1px solid var(--dark-grayish-blue-color);
  border-radius: 50%;
  background-color: transparent;
  margin: 0.8rem 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-bg {
  background-image: linear-gradient(
    90deg,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
}

.uncheck-bg {
  background-image: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
}
</style>
