import { createPortal } from "react-dom";
import tasks from "../../../store/tasks.store";
import { observer } from "mobx-react-lite";
import { type ReactNode } from "react";
import styles from "./Modal.module.scss";
import { Cross1Icon } from "@radix-ui/react-icons";

const Modal = observer(
  ({ children, onClose }: { children: ReactNode; onClose: () => void }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      tasks.titleHandler(e.target.value);
    };

    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.portal}>
          <button className={styles.close} onClick={onClose}>
            <Cross1Icon />
          </button>
          Название задачи:
          <input
            className={styles.input}
            type="text"
            value={tasks.taskTitle}
            onChange={handleInputChange}
            placeholder="Введите название задачи"
          />
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

export default Modal;
