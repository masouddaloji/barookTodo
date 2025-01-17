"use client";
import {
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { useEffect, useRef, useState } from "react";
import useTodoStore from "@/store/store";

function TodoItem({ title, isDone, id }: TodoType) {
  const { editTodo, changeStatusTodo, removeTodo } = useTodoStore();
  const [todoTitle, setTodoTitle] = useState<string>(title);
  const todoItemRef = useRef<HTMLInputElement>(null);
  const [isSelectedItem, setIsSelectedItem] = useState<boolean>(false);
  function editTodoHadndler() {
    if (!todoTitle.trim()) return;
    const updateTodo = {
      title: todoTitle.trim(),
      isDone,
      id,
    };
    editTodo(updateTodo);
    setIsSelectedItem(false);
  }
  function selectTodoForEditHnadler() {
    setIsSelectedItem(true);
  }
  useEffect(() => {
    if (!todoItemRef.current) return;
    if (isSelectedItem) {
      todoItemRef.current.focus();
    }
  }, [isSelectedItem]);
  return (
    <ListItem
      sx={{
        bgcolor: "#15101C",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        marginTop: "1rem",
      }}
    >
      {isDone ? (
        <ListItemText
          primary={
            <Typography
              sx={{
                color: "#78CFB0",
                textDecoration: "line-through",
              }}
            >
              {title}
            </Typography>
          }
        />
      ) : (
        <TextField
          id="outlined-size-small"
          size="small"
          placeholder="Add a new task"
          inputRef={todoItemRef}
          disabled={!isSelectedItem}
          variant="outlined"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          autoComplete="off"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderColor: "#15101C",
              "& fieldset": {
                borderColor: "#15101C",
              },
            },
          }}
        />
      )}

      {!isDone && (
        <>
          {!isSelectedItem && (
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
          )}

          <IconButton
            aria-label="edit todo"
            sx={{
              color: "var(--color)",
              padding: "4px",
            }}
            onClick={() =>
              isSelectedItem ? editTodoHadndler() : selectTodoForEditHnadler()
            }
          >
            {isSelectedItem ? <DoneAllOutlinedIcon /> : <EditOutlinedIcon />}
          </IconButton>
          {!isSelectedItem && (
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
          )}
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;
