import { Stack } from "@mui/material";
import AddTodo from "@/components/addTodo";
import UnDoneTodoList from "@/components/unDoneTodoList";
import DoneTodoList from "@/components/doneTodoList";

export default function Home() {
  return (
    <Stack>
      <AddTodo />
      <UnDoneTodoList />
      <DoneTodoList />
    </Stack>
  );
}
