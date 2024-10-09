import { Task } from "@core/domain";
import { RefObject, useState } from "react";
import { DrawerRef } from "../../../commons/drawer/types/drawer-ref";

type useTaskTableProps = {
  tasks: Task[];
  drawerRef: RefObject<DrawerRef>;
  onUpdateTask: VoidFunction;
};
export function useTaskTable({
  tasks,
  drawerRef,
  onUpdateTask: onUpdateProduct,
}: useTaskTableProps) {
  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);
  function handleEdiTaskButtonClick(task: Task) {
    setTaskBeingEdited(task);
    drawerRef.current?.open();
  }
  function handleDrawerClose() {
    setTaskBeingEdited(null);
  }
  function handleCancelEditting() {
    setTaskBeingEdited(null);
    drawerRef.current?.close();
  }
  function handleUpdateTaskFormSubmit() {
    setTaskBeingEdited(null);
    drawerRef.current?.close;
    onUpdateProduct();
  }
  return {
    taskBeingEdited,
    handleCancelEditting,
    handleUpdateTaskFormSubmit,
    handleEdiTaskButtonClick,
    handleDrawerClose,
  };
}
