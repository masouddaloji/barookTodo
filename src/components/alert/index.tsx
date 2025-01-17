"use client";
import useTodoStore from "@/store/store";
import { Alert, IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRouter } from "next/navigation";

function AlertTodo() {
  const router = useRouter();
  const todos = useTodoStore((state) => state.todos);
  return (
    <>
      {!todos.length ? (
        <Stack width={"100%"} padding={2} mt={10}>
          <Alert
            sx={{
              color: "#f1f1f1",
              borderColor: "var(--color)",
            }}
            variant="outlined"
            severity="warning"
            iconMapping={{
              warning: (
                <ErrorOutlineIcon
                  fontSize="inherit"
                  sx={{ color: "var(--color)" }}
                />
              ),
            }}
          >
            Todos not found.Please{" "}
            <Link
              href="/addTodo"
              style={{
                color: "var(--color)",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              add
            </Link>{" "}
            a new todo.
          </Alert>
        </Stack>
      ) : (
        <Tooltip  title="add todo" arrow sx={{bgcolor:"var(--color)"}}>
          <IconButton
            aria-label="add todo"
            sx={{
              bgcolor: "var(--color)",
              borderRadius: "4px",
              "&:hover": {
                bgcolor: "var(--color)",
              },
              mt: 2,
            }}
            onClick={() => router.push("/addTodo")}
          >
            <AddOutlinedIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}

export default AlertTodo;
