import type { ITask } from "../../types/tasks.interface";
import { observer } from "mobx-react-lite";
import styles from "./Task.module.scss";
import Modal from "../modal/Modal";
import tasks from "../../../store/tasks.store";
import { useState } from "react";
import { CaretRightIcon, PlusIcon } from "@radix-ui/react-icons";
import { CheckboxContainer } from "../../ui/checkbox/Checkbox";

interface IProps {
  task: ITask;
}
const Task = observer(({ task }: IProps) => {
  const { id, title, isCompleted, subTasks } = task;
  const [isModalShown, setIsModalShown] = useState(false);
  const [isSubTasksShown, setIsSubTasksShown] = useState(false);

  function modalWindowToggler() {
    setIsModalShown((prevModalState) => !prevModalState);
  }

  function subTasksToggler() {
    setIsSubTasksShown((prevSubTasks) => !prevSubTasks);
  }

  return (
    <>
      {isModalShown && (
        <Modal>
          <button className="btn" onClick={() => tasks.addSubtask(id)}>
            Добавить подзадачу
          </button>
        </Modal>
      )}
      <div className={styles.task}>
        <div className={styles.content}>
          <CaretRightIcon
            style={{ cursor: "pointer" }}
            width={20}
            height={20}
            onClick={subTasksToggler}
          />
          <h4 className={styles.title}>{title}</h4>
          <button onClick={modalWindowToggler}>
            <PlusIcon />
          </button>
        </div>
        <CheckboxContainer checked={isCompleted} />
      </div>
      {subTasks.length > 0 && (
        <div className={isSubTasksShown ? styles.sub : styles.hide}>
          {subTasks.map((subTask) => (
            <Task key={subTask.id} task={subTask} />
          ))}
        </div>
      )}
    </>
  );
});

export default Task;
