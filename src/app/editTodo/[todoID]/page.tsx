import EditTodo from "@/components/editTodo";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Edit Todo | Update Your Task Title",
  description:
    "Easily edit your Todo items by updating their titles and details. Keep your task list organized and up-to-date with our simple and intuitive editing interface.",
};
function EditTodoPage({ params }: { params: { todoID: string } }) {
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
        Edit Todo
      </Typography>
      <EditTodo todoID={params.todoID} />
    </Stack>
  );
}

export default EditTodoPage;
