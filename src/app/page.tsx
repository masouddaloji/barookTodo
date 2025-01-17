import { Stack } from "@mui/material";
import styles from "./page.module.css";

import AddTodo from "@/components/addTodo";
import UnDoneTodoList from "@/components/unDoneTodoList";
import DoneTodoList from "@/components/doneTodoList";

export default function Home() {
  return (
    <main className={styles.todo_wrapper}>
      <div className={styles.todo_container}>
        <Stack>
          {/* start input box */}
          <AddTodo />
          {/* end input box */}
          {/* start unDone todo list   */}
          <UnDoneTodoList />
          {/* end unDone todo list   */}
          {/* start done todo list   */}
          <DoneTodoList />
          {/* end done todo list   */}
        </Stack>
      </div>
    </main>
  );
}
