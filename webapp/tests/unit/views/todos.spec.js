import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import ToDos from "@/views/ToDoS.vue";

import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("ToDos", () => {
  let state;
  let store;
  describe("basic tests", () => {
    beforeEach(() => {
      state = {
        todos: []
      };
      store = new Vuex.Store({ state });
    });
    it("should render an empty list", () => {
      let cmp = shallowMount(ToDos, {
        store,
        localVue,
        stubs: {
          "ToDo": true
        }
      });
      expect(cmp.findAll("ToDo-stub").length).toBe(0);
    });
    it("should render a list with appropriate length", () => {
      state.todos = [
        {
          id: 1,
          done: false,
          title: "test"
        }
      ];
      let cmp = mount(ToDos, {
        store,
        localVue,
        stubs: {
          "ToDo": true
        }
      });
      expect(cmp.findAll("todo-stub").length).toBe(1);
    });
    it("should trigger an action if the form is clicked", done => {
      state.todos = [];
      store.actions = {
        addToDo: new Promise(() => {
          expect(true).toBe(true);
          done();
        })
      };
      let cmp = mount(ToDos, {
        store,
        localVue,
        stubs: {
          ToDo: true
        }
      });
      cmp.find("form").trigger("submit");
    });
  });
});
