import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1",
        del: false
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2",
        del: false
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1, del: false}];
    },
    updateToDo(state, toDo){
      var i = state.todos.indexOf(toDo);
      state.todos[i] = toDo;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      //debugger;
      commit("addToDo", toDo);
    },
    updateToDo({ commit }, toDo){
      commit("updateToDo", toDo);
    }
  }
});
