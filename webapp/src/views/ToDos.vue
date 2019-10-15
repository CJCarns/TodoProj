<template>
  <div class="todos">
    <template v-for="todo in todos">
      <ToDo :key="todo.id" :todo="todo" />
    </template>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo.vue";
export default {
  name: "ToDos",
  computed: {
    todos() {
      console.log("state", this.$store.state.todos);
      return this.$store.state.todos;
    }
  },
  components: {
    ToDo
  }
};
</script>
