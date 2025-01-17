"use client";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import useTodoStore from "@/store/store";
import { useRouter } from "next/navigation";

function TodoItem({ title, isDone, id }: TodoType) {
  const router = useRouter();
  const { changeStatusTodo, removeTodo } = useTodoStore();

  return (
    <ListItem
      sx={{
        bgcolor: "#15101C",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        marginTop: "1rem",
      }}
    >
      <ListItemText
        primary={
          <Typography
            sx={{
              color: isDone ? "#78CFB0" : "var(--color)",
              textDecoration: isDone ? "line-through" : "none",
            }}
          >
            {title}
          </Typography>
        }
      />

      {!isDone && (
        <>
          <IconButton
            aria-label="done todo"
            sx={{
              color: "var(--color)",
              padding: "4px",
            }}
            onClick={() => changeStatusTodo(id)}
          >
            <CheckOutlinedIcon />
          </IconButton>

          <IconButton
            aria-label="edit todo"
            sx={{
              color: "var(--color)",
              padding: "4px",
            }}
            onClick={() => router.push(`/editTodo/${id}`)}
          >
            <EditOutlinedIcon />
          </IconButton>

          <IconButton
            aria-label="delete todo"
            sx={{
              color: "var(--color)",
              padding: "4px",
            }}
            onClick={() => removeTodo(id)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
