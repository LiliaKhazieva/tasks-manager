import type { ITask } from "../../types/tasks.interface";
import { observer } from "mobx-react-lite";
import styles from "./Task.module.scss";
import Modal from "../modal/Modal";
import tasks from "../../../store/tasks.store";
import { useState } from "react";
import {
  CaretDownIcon,
  CaretRightIcon,
  Cross2Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { CheckboxContainer } from "../../ui/checkbox/Checkbox";

interface IProps {
  task: ITask;
}
const Task = observer(({ task }: IProps) => {
  const { id, title, isCompleted, subTasks } = task;
  const [check, setCheck] = useState(isCompleted);
  const [isShowAccordion, setIsShowAccordion] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  function modalHandler() {
    setIsModalShow(!isModalShow);
  }

  return (
    <>
      {isModalShow && (
        <Modal onClose={() => setIsModalShow(false)}>
          <button
            className="btn"
            onClick={() => {
              tasks.addSubtask(id);
              modalHandler();
            }}
          >
            Добавить подзадачу
          </button>
        </Modal>
      )}
      <li
        onClick={() => {
          setIsShowAccordion(!isShowAccordion);
          tasks.activeTask(id);
        }}
        className={
          tasks.currentTask?.id === id
            ? `${styles.task} ${styles.task_active}`
            : `${styles.task}`
        }
      >
        <div className={styles.content}>
          {isShowAccordion ? (
            <CaretDownIcon
              style={{ cursor: "pointer" }}
              width={20}
              height={20}
            />
          ) : (
            <CaretRightIcon
              style={{ cursor: "pointer" }}
              width={20}
              height={20}
            />
          )}
          <h3 className={styles.title}>{title}</h3>

          <PlusIcon onClick={modalHandler} />
          <Cross2Icon
            onClick={() => {
              alert("Вы уверены что хотите удалить задачу?");
              tasks.removeTask(id);
            }}
          />
        </div>
        <CheckboxContainer
          id={id}
          checked={check}
          onClick={() => {
            tasks.completeCheckbox(id);
            setCheck(!check);
          }}
        />
      </li>
      {subTasks.length > 0 && (
        <div className={isShowAccordion ? `${styles.sub}` : styles.hide}>
          {subTasks.map((subTask) => (
            <Task key={subTask.id} task={subTask} />
          ))}
        </div>
      )}
    </>
  );
});

export default Task;
