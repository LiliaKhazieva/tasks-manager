import { TodoItem } from "./components/todoItem/TodoItem";
import { tasksData } from "./components/todos/todos.data";

function Home() {
  return (
    <ul style={{ padding: "20px", backgroundColor: "#fff" }}>
      {tasksData.map((task) => (
        <TodoItem key={task.id} task={task}>
          {task.text}
        </TodoItem>
      ))}
    </ul>
  );
}
export default Home;
