import { observer } from "mobx-react-lite";
import tasks from "../../../store/tasks.store";
import Task from "../task/Task";

const Tasks = observer(() => {
  return (
    <ul>
      {tasks.taskArray.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
});

export default Tasks;
