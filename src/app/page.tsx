import { Stack, Typography } from "@mui/material";
import AddTodo from "@/components/addTodo";
import UnDoneTodoList from "@/components/unDoneTodoList";
import DoneTodoList from "@/components/doneTodoList";

export default function Home() {
  return (
    <Stack alignItems={"center"} >
      <Typography variant="h1" sx={{fontSize:"2rem"}} pt={1}>Todo</Typography>
      <AddTodo />
      <UnDoneTodoList />
      <DoneTodoList />
    </Stack>
  );
}
