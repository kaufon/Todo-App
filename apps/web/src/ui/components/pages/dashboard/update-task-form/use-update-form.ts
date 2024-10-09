import { Task } from "@core/domain";
import { TaskDto } from "@core/dto/task-dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { booleanSchema, nameSchema } from "@validation/schemas";
import { useApi } from "apps/web/src/ui/hooks/use-api";
import { useToast } from "apps/web/src/ui/hooks/use-toast";
import { useForm } from "react-hook-form";
import { isDirty, z } from "zod";

const updateFormSchema = z.object({
  name: nameSchema,
  status: booleanSchema,
});
type updateTaskFormData = z.infer<typeof updateFormSchema>;

type updateTaskFormProps = {
  task: Task;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
};
export function useUpdateTaskForm({
  task,
  onCancel,
  onSubmit,
}: updateTaskFormProps) {
  const { taskService } = useApi();
  const { register, control, formState, reset, handleSubmit } =
    useForm<updateTaskFormData>({
      defaultValues: {
        name: task.name,
        status: task.status,
      },
      resolver: zodResolver(updateFormSchema),
    });
  const { showError, showSucess } = useToast();
  function handleCancelButtomClick() {
    reset();
    onCancel();
  }
  async function handleFormSubmit(formData: updateTaskFormData) {
    const partialProduct: Record<string, unknown> = {};
    const updatedFields = Object.keys(formState.dirtyFields);
    for (const updatedField of updatedFields) {
      const updatedValue = formData[updatedField as keyof updateTaskFormData];
      partialProduct[updatedField as keyof updateTaskFormData] = updatedValue;
    }
    if (!task.getID) {
      return;
    }
    const response = await taskService.updateTask(
      partialProduct as Partial<TaskDto>,
      task.getID,
    );
    if (response.isFailure) {
      showError(response.errorMessage);
      return;
    }
    if (response.isSucess) {
      showSucess("Produto atualizado com sucesso");
      reset();
      onCancel();
      onSubmit();
    }
  }
  return {
    control,
    errors: formState.errors,
    isDirty: formState.isDirty,
    isSubmiting: formState.isSubmitting,
    register,
    handleCancelButtomClick,
    handleSubmit: handleSubmit(handleFormSubmit),
  };
}
