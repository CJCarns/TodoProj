<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
