import type { ITask } from "./tasks.interface";

export interface ISubTaskAdding {
  id: string;
  array: ITask[];
  task: ITask;
}
