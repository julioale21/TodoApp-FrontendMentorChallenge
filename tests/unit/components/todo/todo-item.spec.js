import { shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/todo/TodoItem.vue";

describe("TodoItem", () => {
  const todos = [
    { name: "todo1", id: "1", completed: false },
    { name: "todo2", id: "2", completed: true },
    { name: "todo3", id: "3", completed: true }
  ];

  it("should render", () => {
    const todo = { name: "todo1", id: "1", completed: true };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the name of todo received like prop", () => {
    const todo = { name: "todo1", id: "1", completed: true };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });
    expect(wrapper.text()).toContain(todo.name);
  });

  it("should call deleteItem function when span with icon delete is pressed", async () => {
    const todo = { name: "todo1", id: "1", completed: true };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });
    wrapper.vm.deleteItem = jest.fn();

    await wrapper.find("span.delete-button").trigger("click");
    expect(wrapper.vm.deleteItem).toHaveBeenCalled();
  });

  it("should call completeTodo function when span name is clicked", async () => {
    const todo = { name: "todo1", id: "1", completed: true };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });
    wrapper.vm.completeTodo = jest.fn();
    const span = await wrapper.find(".todo > li > span");
    await span.trigger("click");
    expect(wrapper.vm.completeTodo).toHaveBeenCalled();
  });

  it("should contains class text-decoration-line-through when todo passed by prop is completed ", async () => {
    const todo = { name: "todo1", id: "1", completed: true };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });

    const span = await wrapper.find(".todo > li > span");
    expect(span.classes()).toContain("text-decoration-line-through");
  });

  it("should not contains class text-decoration-line-through when todo passed by prop is incompleted ", async () => {
    const todo = { name: "todo1", id: "1", completed: false };
    const wrapper = shallowMount(TodoItem, {
      global: {
        provide: {
          todos
        }
      },
      props: {
        todo
      }
    });

    const span = await wrapper.find(".todo > li > span");
    expect(span.classes()).not.toContain("text-decoration-line-through");
  });
});
