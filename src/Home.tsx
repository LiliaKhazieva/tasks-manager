import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Modal from "./components/modal/Modal";
import tasks from "../store/tasks.store";
import Tasks from "./components/tasks/Tasks";
import TaskDescription from "./components/taskDescription/TaskDescription";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <main className="container">
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>
        Добавить задачу
        <PlusIcon />
      </button>

      <div className="content">
        <div className="left">
          {isOpen && (
            <Modal onClose={closeHandler}>
              <button
                className="btn"
                onClick={() => {
                  tasks.addTask();
                  closeHandler();
                }}
              >
                Сохранить
              </button>
            </Modal>
          )}
          <Tasks />
        </div>
        <div className="right">
          <TaskDescription />
        </div>
      </div>
    </main>
  );
}
export default Home;
