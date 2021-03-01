import { mount, shallowMount } from "@vue/test-utils";
import TodoList from "@/components/todo/TodoList";
import TodoItem from "@/components/todo/TodoItem";
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

describe("TodoList", () => {
  const todos = ref("todos");
  const status = ref("status");

  todos.value = [
    { name: "todo1", id: "1", completed: false },
    { name: "todo2", id: "2", completed: true },
    { name: "todo3", id: "3", completed: true }
  ];

  status.value = "all";

  let provides = {
    todos,
    status
  };

  function createWrapper(mountType = shallowMount, provides) {
    return mountType(TodoList, {
      global: {
        provide: {
          ...provides
        }
      }
    });
  }

  it("should render", () => {
    const wrapper = createWrapper(shallowMount, provides);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render a draggable element with todo-list and dragArea classes", async () => {
    const wrapper = createWrapper(mount, provides);
    const draggable = wrapper.findComponent(VueDraggableNext);
    expect(draggable.classes()).toContain("todo-list");
    expect(draggable.classes()).toContain("dragArea");
  });

  it("should render one TodoItem from each todo in todos when status is all", () => {
    provides["todosFiltered"] = todos;
    const wrapper = createWrapper(mount, provides);
    expect(wrapper.findAllComponents(TodoItem).length).toBe(3);
  });

  it("should render one TodoItem from each todo in todos whose completed property is true when status is completed", () => {
    provides.status.value = "completed";

    const wrapper = createWrapper(mount, provides);
    expect(wrapper.findAllComponents(TodoItem).length).toBe(2);
  });

  it("should render one TodoItem from each todo in todos whose completed property is false when status is active", () => {
    provides.status.value = "active";

    const wrapper = createWrapper(mount, provides);
    expect(wrapper.findAllComponents(TodoItem).length).toBe(1);
  });
});
