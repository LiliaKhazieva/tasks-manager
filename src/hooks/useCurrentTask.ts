import { useSearchParams } from "react-router";
import { useMemo } from "react";
import { tasksData } from "../components/tasks/tasks.data";

export const useCurrentTask = () => {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get("task");

  const currentTask = useMemo(
    () => tasksData.find((task) => task.id.toString() === selectedFlight),
    [selectedFlight]
  ); //нашли первого совпавшего по id
  return { currentTask };
};
