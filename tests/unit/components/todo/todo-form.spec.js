import { shallowMount } from "@vue/test-utils";
import TodoForm from "@/components/todo/TodoForm.vue";

describe("TodoForm", () => {
  const todosAll = [{ name: "fasfasdfa" }];
  const wrapper = shallowMount(TodoForm, {
    global: {
      provide: {
        todos: todosAll
      }
    }
  });

  it("should render", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("render a form with class todo-form", () => {
    expect(wrapper.find("form").exists()).toBeTruthy();
    expect(wrapper.find(".todo-form").exists()).toBe(true);
  });

  it("render an input with class todo-form-input", () => {
    const input = wrapper.find("input");
    expect(input.classes()).toContain("todo-form-input");
  });

  it("calls sendForm method when form is submmited", async () => {
    wrapper.vm.sendForm = jest.fn();

    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.vm.sendForm).toHaveBeenCalled();
  });
});
