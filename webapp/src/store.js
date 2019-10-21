import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginState: {
      loggedIn: false
    }
  },
  mutations: {
    login: function(state) {
      state.loginState = { ...state.loginState, loggedIn: true };
    },
    logout: function(state) {
      state.loginState = { ...state.loginState, loggedIn: false };
    }
  },
  actions: {
    login: function({ commit }, payload) {
      const { email, password } = payload;
      return axios.post("/api/login", { email, password }).then(() => {
        commit("login");
      });
    },
    logout: function({ commit }) {
      return axios.get("/api/logout").then(() => {
        commit("logout");
      });
    }
  }
});
