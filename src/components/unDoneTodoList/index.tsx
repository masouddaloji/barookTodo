"use client";
import { List, Stack, Typography } from "@mui/material";
import React from "react";
import TodoItem from "../todoItem";
import useTodoStore from "@/store/store";

function UnDoneTodoList() {
  const todos = useTodoStore((state) => state.todos).filter(
    (todo) => !todo.isDone
  );
  return (
    <>
      {todos.length > 0 && (
        <Stack mt={4} spacing={2} width={"100%"}>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontSize: "1rem",
            }}
          >
            Tasks to do {`- ${todos.length}`}
          </Typography>
          <List style={{ marginTop: "0" }} className="todo_list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </List>
        </Stack>
      )}
    </>
  );
}

export default UnDoneTodoList;
