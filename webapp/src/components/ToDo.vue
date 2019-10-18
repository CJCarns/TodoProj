<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="stateChange"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <button v-on:click="delTodo()">Delete</button>
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
    stateChange() {
      this.$emit("StateChange");
    },
    delTodo() {
      this.todo.del = true;
      this.stateChange();
    }
  }
};
</script>
