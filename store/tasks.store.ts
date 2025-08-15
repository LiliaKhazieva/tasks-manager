import { makeAutoObservable } from "mobx";
import type {
  activeTaskSearchProps,
  ITask,
} from "../src/types/tasks.interface";

class Tasks {
  taskArray: ITask[] = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  currentTask: ITask | null = null;
  taskTitle = "";

  constructor() {
    makeAutoObservable(this);
  }

  titleHandler = (string: string) => {
    this.taskTitle = string;
  };

  addTask = () => {
    if (this.taskTitle.trim().length) {
      this.taskArray.push({
        id: Math.random().toString(),
        title: `Задача ${this.taskTitle}`,
        isCompleted: false,
        subTasks: [],
      });

      localStorage.setItem("tasks", JSON.stringify(this.taskArray));
      this.taskTitle = "";
    }
  };

  updateTask = (id: string, newTitle: string) => {
    const index = this.taskArray.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.taskArray[index] = {
        ...this.taskArray[index],
        title: `Задача ${newTitle}`,
      };
      localStorage.setItem("tasks", JSON.stringify(this.taskArray));
    }
  };

  addSubtaskIntinite = (id: string, array: ITask[], task: ITask) => {
    return array.reduce((arr: ITask[], item) => {
      if (item.id === id) {
        item.subTasks.push(task);
        arr.push(item);
      } else {
        arr.push({
          ...item,
          subTasks: this.addSubtaskIntinite(id, item.subTasks, task),
        });
      }
      return arr;
    }, []);
  };

  addSubtask = (id: string) => {
    if (this.taskTitle.trim().length) {
      const task: ITask = {
        id: Math.random().toString(),
        title: `Задача ${this.taskTitle}`,
        isCompleted: false,
        subTasks: [],
      };
      this.taskArray = this.addSubtaskIntinite(id, this.taskArray, task);
      localStorage.setItem("tasks", JSON.stringify(this.taskArray));
      this.taskTitle = "";
    }
  };

  subTasksCompleteToggler = (array: ITask[], state: boolean) => {
    return array.reduce((arr: ITask[], item) => {
      arr.push({
        ...item,
        isCompleted: state,
        subTasks: this.subTasksCompleteToggler(item.subTasks, state),
      });

      return arr;
    }, []);
  };

  addSelectedCheckbox = (id: string, array: ITask[]) => {
    return array.reduce((arr: ITask[], task) => {
      if (task.id !== id) {
        arr.push({
          ...task,
          subTasks: this.addSelectedCheckbox(id, task.subTasks),
        });
      } else {
        arr.push({
          ...task,
          isCompleted: !task.isCompleted,
          subTasks: this.subTasksCompleteToggler(
            task.subTasks,
            !task.isCompleted
          ),
        });
      }

      return arr;
    }, []);
  };

  completeCheckbox = (id: string) => {
    this.taskArray = this.addSelectedCheckbox(id, this.taskArray);
    localStorage.setItem("tasks", JSON.stringify(this.taskArray));
  };

  activeTaskSearch: activeTaskSearchProps = (id, array) => {
    for (let item of array) {
      if (item.id === id) {
        return item;
      }
      const subTask = this.activeTaskSearch(id, item.subTasks);

      if (subTask) {
        return subTask;
      }
    }
    return null;
  };

  activeTask = (id: string) => {
    this.currentTask = this.activeTaskSearch(id, this.taskArray);
  };

  removeFilter = (id: string, array: ITask[]) => {
    return array.reduce((arr: ITask[], item) => {
      if (item.id !== id) {
        arr.push({ ...item, subTasks: this.removeFilter(id, item.subTasks) });
      }
      return arr;
    }, []);
  };

  removeTask = (id: string) => {
    this.taskArray = this.removeFilter(id, this.taskArray);
    localStorage.setItem("tasks", JSON.stringify(this.taskArray));

    if (!this.taskArray.length) {
      this.currentTask = null;
      localStorage.removeItem("tasks");
    }
  };
}

const tasks = new Tasks();

export default tasks;
