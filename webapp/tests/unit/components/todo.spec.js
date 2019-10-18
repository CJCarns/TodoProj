import { shallowMount } from "@vue/test-utils";
import ToDo from "@/components/ToDo.vue";

describe("ToDO", () => {
  describe("basic tests", () => {
    let cmp;

    beforeEach(() => {
      cmp = shallowMount(ToDo, {
        stubs: { "b-checkbox": true },
        propsData: {
          todo: {
            done: true,
            title: "test"
          }
        }
      });
    });

    it("should show done if done", () => {
      expect(cmp.find("b-checkbox-stub").attributes().value).toBe("true");
    });

    it("should show the text of the title", () => {
      expect(cmp.find(".todo-title").text()).toBe("test");
    });
  });
});
