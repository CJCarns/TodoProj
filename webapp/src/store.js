import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      }
    ]
  },
  mutations: {},
  actions: {}
});
