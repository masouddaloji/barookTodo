import { create } from "zustand";
const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  createTodo: (title) =>
    set((state) => {
      const newTodo = {
        title,
        isDone: false,
        id: crypto.randomUUID(),
      };
      return { todos: [newTodo, ...state.todos] };
    }),
  editTodo: (updateTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updateTodo.id ? { ...updateTodo } : todo
      ),
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  changeStatusTodo: (todoId: string) =>
    set((state) => {
      const currentTodo = state.todos.find((todo) => todo.id === todoId);
      if (currentTodo) {
        currentTodo.isDone = true;
        return {
          todos: [
            currentTodo,
            ...state.todos.filter((todo) => todo.id !== todoId),
          ],
        };
      } else {
        return {
          todos: state.todos,
        };
      }
    }),
}));

export default useTodoStore;
