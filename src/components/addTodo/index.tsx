"use client";
import React, { useRef } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { IconButton, Stack, TextField } from "@mui/material";
import useTodoStore from "@/store/store";
import { useRouter } from "next/navigation";

function AddTodo() {
  const router = useRouter();
  const { createTodo } = useTodoStore();
  const todoRef = useRef<HTMLInputElement>(null);
  const addTodoHandler = () => {
    if (!todoRef.current || !todoRef.current?.value?.trim()) return;
    createTodo(todoRef.current.value);
    todoRef.current.value = "";
    router.push("/");
  };
  return (
    <Stack direction="row" spacing={1} width={"100%"}>
      <TextField
        id="outlined-size-small"
        size="small"
        placeholder="Add a new task"
        inputRef={todoRef}
        autoComplete="off"
        autoFocus
      />
      <IconButton
        aria-label="add todo"
        sx={{
          bgcolor: "var(--color)",
          borderRadius: "4px",
          "&:hover": {
            bgcolor: "var(--color)",
          },
        }}
        onClick={addTodoHandler}
      >
        <AddOutlinedIcon sx={{ color: "#fff" }} />
      </IconButton>
    </Stack>
  );
}

export default AddTodo;
