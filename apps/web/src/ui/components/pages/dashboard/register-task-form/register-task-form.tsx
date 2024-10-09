import { Input } from "@nextui-org/input";
import { useRegisterTaskForm } from "./use-register-form";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

type registerTaskFormProps = {
  onSubmit: VoidFunction;
  onCancel: VoidFunction;
};
export const RegisterTaskForm = ({
  onSubmit,
  onCancel,
}: registerTaskFormProps) => {
  const { control, errors, register, handleSubmit } =
    useRegisterTaskForm(onSubmit);
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
          <Button onClick={onCancel}>Cancelar</Button>
          <Button type="submit" color="primary">
            Confirmar
          </Button>
        </div>
      </form>
    </>
  );
};
