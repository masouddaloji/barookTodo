import { Stack, Typography } from "@mui/material";
import UnDoneTodoList from "@/components/unDoneTodoList";
import DoneTodoList from "@/components/doneTodoList";
import AlertTodo from "@/components/alert";

export default function Home() {
  return (
    <Stack alignItems={"center"} overflow={"hidden"}>
      <Typography variant="h1" sx={{ fontSize: "2rem" }} pt={1}>
        Todos
      </Typography>
      <UnDoneTodoList />
      <DoneTodoList />
      <AlertTodo />
    </Stack>
  );
}
