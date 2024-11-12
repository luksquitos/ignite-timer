import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Timer } from "../components/Timer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useEffect, useState } from "react";
import { subSeconds } from "date-fns";


const createNewTaskValidationSchema = zod.object({
  "task": zod.string().min(1, "Preencha o campo"),
  "numberInput": zod.number()
    .min(1, "O número mínimo é 1")
    .max(60, "O número máximo é 60")
})

interface Task {
  "id": string, // 
  "description": string,
  "minutesAmount": number,
}

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
  const [tasks, setTask] = useState<Task[]>([])
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [timerCountdown, setTimerCountDown] = useState<Date | null>(null)
  const buttonDisabled = !watch("task")
  
  function createNewTask(data: newTaskFormData){
    const id = String(new Date().getTime())
    const newTask: Task = {
      "id": id,
      "description": data.task,
      "minutesAmount": data.numberInput
    }
    // setTask([...tasks, newTask]) // Não garante o estado atual do objeto.
    setTask((state) => [...state, newTask]) // Garante o estado atual do objeto
    setActiveTask(newTask)
    //genius
    setTimerCountDown(new Date(`November 10, 00:${newTask.minutesAmount}:00`))
    reset()
  }
  
  useEffect(() => {
    // Esse código foi corrigido pelo chat. De 
    // acordo com ele, o setTimeout estava
    // se sobrepondo entre os loops do useeffect.
    
    // Verifica se o timerCountdown está definido
    if (timerCountdown) {
      const interval = setInterval(() => {
        setTimerCountDown((prevCountdown) => {
          if (prevCountdown) {
            const newTime = subSeconds(prevCountdown, 1);
            const minutes = newTime.getMinutes();
            const seconds = newTime.getSeconds();

            // Se o tempo acabou, limpa o intervalo
            if (!minutes && !seconds) {
              clearInterval(interval);
              return null;
            }
            return newTime;
          }
          return null;
        });
      }, 1000);

      // Limpa o intervalo quando o componente é desmontado ou o timerCountdown muda
      return () => clearInterval(interval);
    }
  }, [timerCountdown]);
    
  return (
    <form onSubmit={handleSubmit(createNewTask)} className="mt-[75px] w-[655px] h-[420px]">
      <Input registerProperty={register}/> 
      <Timer currentTime={timerCountdown}/>
      <Button color="green" disabled={buttonDisabled} />
    </form>
  )
}