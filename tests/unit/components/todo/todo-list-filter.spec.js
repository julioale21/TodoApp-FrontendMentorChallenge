import { shallowMount } from "@vue/test-utils";
import TodoListFilter from "@/components/todo/TodoListFilter";
import { ref } from "vue";

describe("TodoListFilter", () => {
  const status = ref("status");
  status.value = "all";
  const wrapper = shallowMount(TodoListFilter, {
    global: {
      provide: {
        status
      }
    }
  });

  it("should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should setup status all when button all is pressed", () => {
    const buttonAll = wrapper.find("#all");
    buttonAll.trigger("click");
    expect(wrapper.vm.status).toBe("all");
  });

  it("should setup status active when button active is pressed", () => {
    const buttonAll = wrapper.find("#active");
    buttonAll.trigger("click");
    expect(wrapper.vm.status).toBe("active");
  });

  it("should setup status completed when button active is pressed", () => {
    const buttonAll = wrapper.find("#completed");
    buttonAll.trigger("click");
    expect(wrapper.vm.status).toBe("completed");
  });

  it("should set the corresponding button with the active class", async () => {
    const buttonAll = wrapper.find("#all");
    const buttonActive = wrapper.find("#active");
    const buttonCompleted = wrapper.find("#completed");

    buttonAll.trigger("click");
    await wrapper.vm.$nextTick();
    expect(buttonAll.classes()).toContain("active");

    buttonActive.trigger("click");
    await wrapper.vm.$nextTick();
    expect(buttonActive.classes()).toContain("active");

    buttonCompleted.trigger("click");
    await wrapper.vm.$nextTick();
    expect(buttonCompleted.classes()).toContain("active");
  });
});
