import { Play, HandPalm } from "@phosphor-icons/react"
import { useTimer } from "../contexts/TimerContext";
import { useTasks } from "../contexts/TasksContext";

const ButtonVariants = {
  "green": "bg-green [&:not(:disabled):hover]:bg-green-dark",
  "red": "bg-red hover:bg-reddark",
}


export function Button({...props}: {[key: string]: any} ){
  const {activeTask, setActiveTask, setTimerCountdown} = useTimer() 
  const {tasks, setTasks} = useTasks()
  const hasActiveTask = Boolean(activeTask)
  
  function interruptTimer(){
    // Update activeTask to canceled in 'tasks' array.
    const updatedTasks = tasks.map((task) => {
      if(task.id === activeTask?.id){
        return {
          ...task,
          status: "canceled"
        }
      }
      return task
    })

    document.title = "Timer Ignite"
    setTasks(updatedTasks)
    setActiveTask(null)
    setTimerCountdown(null)
  }

  if(hasActiveTask){
    return (
      <button onClick={interruptTimer} className={`mt-[76px] w-full h-12 flex justify-center items-center gap-2 rounded-lg ${ButtonVariants['red']} text-gray7  disabled:opacity-70 disabled:cursor-not-allowed `}>
        <HandPalm size={24}/>
        <p>Interromper</p>
      </button>
    )
  }
  
  return (
    <button {...props} type="submit" className={`mt-[76px] w-full h-12 flex justify-center items-center gap-2 rounded-lg ${ButtonVariants['green']} text-gray7  disabled:opacity-70 disabled:cursor-not-allowed `}>
      <Play size={24}/>
      <p>Começar</p>
    </button>
  )
}