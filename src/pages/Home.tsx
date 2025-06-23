import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Timer } from "../components/Timer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useTasks } from "../contexts/TasksContext";
import { TaskProps } from "../components/Task";
import { useTimer } from "../contexts/TimerContext";


const createNewTaskValidationSchema = zod.object({
  "task": zod.string().min(1, "Preencha o campo"),
  "numberInput": zod.number()
    .min(1, "O número mínimo é 1")
    .max(60, "O número máximo é 60")
})


type newTaskFormData = zod.infer<typeof createNewTaskValidationSchema>

export function Home(){
  const { register, handleSubmit, watch, reset} = useForm<newTaskFormData>({
    resolver: zodResolver(createNewTaskValidationSchema),
    defaultValues: {
      "task": "",
      "numberInput": 0
    }
  });
  const {tasks, setTasks} = useTasks()
  const {activeTask, setActiveTask} = useTimer()
  const {setTimerCountdown} = useTimer()
  const buttonDisabled = !watch("task")
  const hasActiveTask = Boolean(activeTask)
  
  function createNewTask(data: newTaskFormData){
    const id = String(new Date().getTime())
    const newTask: TaskProps = {
      "id": id,
      "description": data.task,
      "minutesAmount": data.numberInput,
      "createdAt": new Date(),
      "status": "pending"
    }
    // setTask([...tasks, newTask]) // Não garante o estado atual do objeto.
    setTasks((task) => [newTask, ...tasks]) // Garante o estado atual do objeto
    setActiveTask(newTask)
    //genius
    setTimerCountdown(new Date(`November 10, 00:${newTask.minutesAmount}:00`))
    reset()
  }
    
  return (
    <form onSubmit={handleSubmit(createNewTask)} className="mt-[75px] w-[655px] h-[420px]">
      <Input registerProperty={register} disabled={hasActiveTask}/> 
      <Timer />
      <Button disabled={buttonDisabled} />
    </form>
  )
}