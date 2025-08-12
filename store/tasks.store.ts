export type TodoType = {
  id: string;
  title: string;
  text: string;
  isCompleted: boolean;
  subTasks: TodoType[];
};

import { makeAutoObservable } from "mobx";
import type { ITask } from "../src/types/tasks.interface";

class Tasks {
  taskArray: ITask[] = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  activeTask: ITask | null = null;
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
        title: this.taskTitle,
        isCompleted: false,
        subTasks: [],
      });

      localStorage.setItem("tasks", JSON.stringify(this.taskArray));
      this.taskTitle = "";
    }
  };

  subTaskAdding = (id: string, array: ITask[], task: ITask) => {
    return array.reduce((arr: ITask[], item) => {
      if (item.id === id) {
        item.subTasks.push(task);
        arr.push(item);
      } else {
        arr.push({
          ...item,
          subTasks: this.subTaskAdding(id, item.subTasks, task),
        });
      }
      return arr;
    }, []);
  };

  addSubtask = (id: string) => {
    if (this.taskTitle.trim().length) {
      const task = {
        id: Math.random(),
        title: this.taskTitle,
        isCompleted: false,
        subTasks: [],
      };
      this.taskArray = this.subTaskAdding(id, this.taskArray, task);
      localStorage.setItem("tasks", JSON.stringify(this.taskArray));
      this.taskTitle = "";
    }
  };
}

const tasks = new Tasks();

export default tasks;
