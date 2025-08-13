export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
  subTasks: ITask[];
}

export interface ISubTaskAdd {
  id: string;
  array: ITask[];
  task: ITask;
}

export type activeTaskSearchProps = (
  id: string,
  array: ITask[]
) => ITask | null;

export type completedCheckboxProps = (id: string, array: ITask[]) => ITask[];
