export interface ISubTask {
  id: number;
  text: string;
}

export interface ITask {
  id: number;
  text: string;
  subTask: ISubTask[];
}
