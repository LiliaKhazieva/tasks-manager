import { observer } from "mobx-react-lite";
import styles from "./Tasks.module.scss";
import tasks from "../../../store/tasks.store";
import Task from "../task/Task";

const Tasks = observer(() => {
  return (
    <div className={styles.tasks}>
      {tasks.taskArray.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
});

export default Tasks;
