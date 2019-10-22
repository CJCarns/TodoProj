<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="handleCheck"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <span class="todo-acton">
      <b-button v-on:click="handleDelete">Delete</b-button>
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
  },
  methods: {
    handleCheck: function(value) {
      this.$store.dispatch("updateTodo", {...this.todo, done: value});
    },
    handleDelete: function() {
      this.$store.dispatch("deleteTodo", this.todo);
    }
  }
};
</script>
