import { observer } from "mobx-react-lite";
import tasks from "../../../store/tasks.store";
import styles from "./TaskDescription.module.scss";

const TaskDescription = observer(() => {
  return (
    <>
      {tasks.currentTask && (
        <div className={styles.content}>
          <h2 className={styles.title}>Описание задачи</h2>
          <p>{tasks.currentTask.title}</p>
        </div>
      )}
    </>
  );
});

export default TaskDescription;
