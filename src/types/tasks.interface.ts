export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
  subTasks: ITask[];
}
