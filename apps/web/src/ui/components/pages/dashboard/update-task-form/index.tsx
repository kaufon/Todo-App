import { Input } from "@nextui-org/input";
import { useRegisterTaskForm } from "../register-task-form/use-register-form";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";
import { Task } from "@core/domain";
import { useUpdateTaskForm } from "./use-update-form";

type updateFormTaskProps = {
  task: Task;
  onSubmit: VoidFunction;
  onCancel: VoidFunction;
};
export const UpdateTaskForm = ({
  task,
  onSubmit,
  onCancel,
}: updateFormTaskProps) => {
  const {
    control,
    register,
    errors,
    isDirty,
    isSubmiting,
    handleSubmit,
    handleCancelButtomClick,
  } = useUpdateTaskForm({ task, onSubmit, onCancel });

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 space-y-2">
          <Input
            label="Nome da tarefa"
            isRequired
            isInvalid={Boolean(errors.name)}
            {...register("name")}
            errorMessage={errors.name?.message}
          />
          <Switch {...register("status")}>Ativo</Switch>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleCancelButtomClick} isDisabled={isSubmiting}>
            Cancelar
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={!isDirty}
            isLoading={isSubmiting}
          >
            Confirmar
          </Button>
        </div>
      </form>
    </>
  );
};
