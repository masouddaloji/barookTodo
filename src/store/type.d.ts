interface TodoState {
  todos: TodoType[];
  createTodo: (todo: string) => void;
  editTodo: (todo: TodoType) => void;
  removeTodo: (id: string) => void;
  changeStatusTodo: (id: string) => void;
}
interface TodoType {
  title: string;
  isDone: boolean;
  id: string;
}
