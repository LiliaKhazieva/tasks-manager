import { useState } from "react";
import styles from "./Accordion.module.scss";
import type { ITask } from "../../types/tasks.interface";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { CheckboxContainer } from "../checkbox/Checkbox";
import tasks from "../../../store/tasks.store";
import { createPortal } from "react-dom";

export function Accordion({ task, content }: { task: ITask; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.title}>
          <button
            className={styles.btn}
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            <ChevronRightIcon />
          </button>
          <span>Задача {task.id}</span>
        </div>
        <CheckboxContainer />
      </div>
      {isOpen && (
        <div style={{ marginLeft: "10px" }}>
          {task?.subTasks?.length > 0 &&
            task?.subTasks.map((subTask) => (
              <Accordion task={subTask} content="jyrj" />
            ))}
        </div>
      )}
    </>
  );
}
