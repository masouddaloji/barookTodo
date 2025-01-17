import EditTodo from "@/components/editTodo";
import React from "react";

function EditTodoPage({ params }: { params: { todoID: string } }) {
  return <EditTodo todoID={params.todoID} />;
}

export default EditTodoPage;
