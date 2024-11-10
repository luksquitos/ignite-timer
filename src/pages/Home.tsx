import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Timer } from "../components/Timer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';


const createNewTaskValidationSchema = zod.object({
  "task": zod.string().min(1, "Preencha o campo"),
  "numberInput": zod.number()
    .min(1, "O número mínimo é 1")
    .max(60, "O número máximo é 60")
})

// interface newTaskFormData {
//   "task": string,
//   "numberInput": number,
// }

type newTaskFormData = zod.infer<typeof createNewTaskValidationSchema>

export function Home(){
  const { register, handleSubmit, watch, reset} = useForm<newTaskFormData>({
    resolver: zodResolver(createNewTaskValidationSchema),
    defaultValues: {
      "task": "",
      "numberInput": 0
    }
  });
  const buttonDisabled = !watch("task")
  
  function createNewTask(data: newTaskFormData){
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(createNewTask)} className="mt-[75px] w-[655px] h-[420px]">
      <Input registerProperty={register}/> 
      <Timer/>
      <Button color="green" disabled={buttonDisabled} />
    </form>
  )
}