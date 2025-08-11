import { Accordion } from "radix-ui";
import styles from "./TodoItem.module.scss";
import type { ITask } from "../todos/todos.types";

interface IProps {
  task: ITask;
}

export function TodoItem({ task }: IProps) {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item className={styles.item} value="item-1">
        <Accordion.Trigger className={styles.trigger}>
          <img src="arrow_right.svg" alt="arrow_right" width={20} />
          Задача {task.id}
        </Accordion.Trigger>
        <Accordion.Content>
          <Accordion.Trigger className={styles.trigger}>
            {task?.subTask?.length > 0 && (
              <div>
                {task?.subTask.map((subTask) => (
                  <TodoItem key={subTask.id} task={subTask} />
                ))}
              </div>
            )}
          </Accordion.Trigger>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
