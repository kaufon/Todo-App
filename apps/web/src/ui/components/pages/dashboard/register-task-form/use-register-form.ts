import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { booleanSchema, nameSchema } from "@validation/schemas";
import { Task } from "@core/domain";
import { useApi } from "apps/web/src/ui/hooks/use-api";
import { useToast } from "apps/web/src/ui/hooks/use-toast";
const registerTaskFormSchema = z.object({
  name: nameSchema,
  status: booleanSchema,
});
type RegisterTaskFormData = z.infer<typeof registerTaskFormSchema>;
export function useRegisterTaskForm(onSubmit: VoidFunction) {
  const { taskService } = useApi();
  const { showError, showSucess } = useToast();
  const { control, formState, reset, register, handleSubmit } =
    useForm<RegisterTaskFormData>({
      resolver: zodResolver(registerTaskFormSchema),
    });
  async function handleFormSubmit(formData: RegisterTaskFormData) {
    const task = Task.create({
      name: formData.name,
      status: formData.status,
    });
    const response = await taskService.registerTask(task);
    if (response.isFailure) {
      showError(response.errorMessage);
    }
    if (response.isSucess) {
      showSucess("Tarefa cadastrada com sucesso");
      reset();
      onSubmit();
    }
  }
  return {
    control,
    errors: formState.errors,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
  };
}
