import LoginForm from "@/components/LoginForm.vue";
import Vuex from "vuex";
import Buefy from "buefy";
import { shallowMount, createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Buefy);

describe("LoginForm.vue", () => {
  let actions;
  let store;
  let commit;

  beforeEach(() => {
    store = new Vuex.Store();
    store.dispatch = jest.fn();
  });

  it("should call login if form is filled out correctly", () => {
    let form = shallowMount(LoginForm, { localVue, store });
    let username = "test@test.com";
    let password = "test";
    let emailInput = form.find("b-input-stub[type='email']");
    let passwordInput = form.find("b-input-stub[type='password']");
    emailInput.element.value = username;
    emailInput.trigger("change");
    passwordInput.element.value = password;
    passwordInput.trigger("change");
    form.find("button.is-primary").trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith("login", {
      email: username,
      password
    });
  });
});
