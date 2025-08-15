import { observer } from "mobx-react-lite";
import tasks from "../../../store/tasks.store";
import styles from "./TaskDescription.module.scss";
import { useState } from "react";

const TaskDescription = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState("");

  const handleSaveClick = () => {
    tasks.updateTask(tasks?.currentTask?.id || "", edit);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className={styles.content}>
          <h2 className={styles.title}>Редактировать задачу:</h2>
          <input
            className={styles.input}
            type="text"
            value={edit}
            placeholder="Введите новое название задачи"
            onChange={(e) => setEdit(e.target.value)}
          />
          <button className="btn" onClick={handleSaveClick}>
            Сохранить
          </button>
        </div>
      ) : (
        tasks.currentTask && (
          <div className={styles.content}>
            <div className={styles.description}>
              <button className="btn" onClick={() => setIsEditing(true)}>
                Редактировать задачу{" "}
                <img src="pencil.svg" alt="pencil" width={12} />
              </button>
            </div>
            <p>{tasks?.currentTask?.title}</p>
          </div>
        )
      )}
    </>
  );
});

export default TaskDescription;
