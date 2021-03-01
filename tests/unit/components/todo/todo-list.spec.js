import { mount } from "@vue/test-utils";
import TodoList from "@/components/todo/TodoList";

describe("TodoList", () => {
  const todos = [
    { name: "todo1", id: "1", completed: false },
    { name: "todo2", id: "2", completed: true },
    { name: "todo3", id: "3", completed: true }
  ];

  let status = "all";

  const wrapper = mount(TodoList, {
    global: {
      provide: {
        todos,
        status,
        todosFiltered: todos
      }
    }
  });

  it("should render", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
