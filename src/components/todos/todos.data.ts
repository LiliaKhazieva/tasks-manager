import type { ITask } from "./todos.types";

export const tasksData: ITask[] = [
  {
    id: 1,
    text: "Помыть посуду",
    subTask: [
      { id: 1.1, text: "Ghjykutk" },
      { id: 1.2, text: "kukdtu" },
      { id: 1.3, text: "snnsshn" },
    ],
  },
  {
    id: 2,
    text: "Купить продукты",
    subTask: [
      { id: 2.1, text: "hnsyrhjse" },
      { id: 2.2, text: "hsryhsryjs" },
      { id: 2.3, text: "snnsshn" },
    ],
  },
  {
    id: 3,
    text: "Забрать посылку",
    subTask: [
      { id: 3.1, text: "syjnsjm" },
      { id: 3.2, text: "jjsyhj" },
      { id: 3.3, text: "hn" },
    ],
  },
];
