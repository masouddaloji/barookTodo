import AddTodo from "@/components/addTodo";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Add Todo | Create Your Task Effortlessly",
  description:
    "Quickly add new tasks to your Todo list with ease. Keep track of your responsibilities and boost productivity by creating and organizing tasks in a user-friendly interface.",
};
function AddTodoPage() {
  return (
    <Stack
      spacing={5}
      sx={{
        bgcolor: "#15101C",
        borderRadius: "10px",
        padding: "3rem 1.5rem",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontSize: "2rem" }}>
        Add Todo
      </Typography>
      <AddTodo />
    </Stack>
  );
}

export default AddTodoPage;
