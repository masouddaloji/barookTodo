"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import useTodoStore from "@/store/store";
import { notFound, useRouter } from "next/navigation";

function EditTodo({ todoID }: { todoID: string }) {
  const router = useRouter();
  const { editTodo, todos } = useTodoStore();
  const todoItemRef = useRef<HTMLInputElement>(null);
  const currentTodo = todos.find((todo) => todo.id === todoID);
  if (!currentTodo) {
    notFound();
  }
  const [todoTitle, setTodoTitle] = useState<string>(currentTodo?.title || "");

  function editTodoHadndler() {
    if (!todoTitle.trim() || !currentTodo) return;
    const updateTodo = {
      title: todoTitle.trim(),
      isDone: currentTodo.isDone,
      id: currentTodo.id,
    };
    editTodo(updateTodo);
    router.push("/");
  }
  useEffect(() => {
    if (!todoItemRef.current) return;
    todoItemRef.current.focus();
  }, []);

  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        bgcolor: "#15101C",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
      }}
    >
      <TextField
        id="outlined-size-small"
        size="small"
        placeholder="Add a new task"
        inputRef={todoItemRef}
        variant="outlined"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        autoComplete="off"
      />
      <IconButton
        aria-label="edit todo"
        sx={{
          color: "var(--color)",
          padding: "4px",
        }}
        onClick={editTodoHadndler}
      >
        <DoneAllOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

export default EditTodo;
