import { observer } from "mobx-react-lite";
import tasks from "../../../store/tasks.store";
import Task from "../task/Task";

const Tasks = observer(() => {
  return (
    <ul>
      {tasks.taskArray.length > 0
        ? tasks.taskArray.map((task) => <Task key={task.id} task={task} />)
        : "Нет задач. Чтобы создать нажмите кнопку: Добавить задачу."}
    </ul>
  );
});

export default Tasks;
