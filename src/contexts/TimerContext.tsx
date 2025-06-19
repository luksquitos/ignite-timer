import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { TaskProps } from "../components/Task";
import { subSeconds } from "date-fns";


interface TimerContextInterface {
  activeTask: TaskProps | null,
  setActiveTask: Dispatch<SetStateAction<TaskProps | null>>
  timerCountdown: Date | null,
  setTimerCountdown: Dispatch<SetStateAction<Date | null>>,
}

const TimerContext = createContext<TimerContextInterface |undefined >(undefined)

export function TimerContextProvider({children}: {children: ReactNode}){
  const [activeTask, setActiveTask] = useState<TaskProps | null>(null)
  const [timerCountdown, setTimerCountdown] = useState<Date | null>(null)

  useEffect(() => {
      // Esse código foi corrigido pelo chat. De 
      // acordo com ele, o setTimeout estava
      // se sobrepondo entre os loops do useeffect.
      
      // Verifica se o timerCountdown está definido
      if (timerCountdown) {
        const interval = setInterval(() => {
          setTimerCountdown((prevCountdown) => {
            if (prevCountdown) {
              const newTime = subSeconds(prevCountdown, 1);
              const minutes = newTime.getMinutes();
              const seconds = newTime.getSeconds();
  
              // Se o tempo acabou, limpa o intervalo
              if (!minutes && !seconds) {
                clearInterval(interval);
                setActiveTask(null)
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
      <TimerContext.Provider value={{activeTask, setActiveTask, timerCountdown, setTimerCountdown}}>
        {children}
      </TimerContext.Provider>
    )
}

export function useTimer(){
  const context = useContext(TimerContext)
  if (!context){
    throw new Error("Context not being used by this component")
  }

  return context
}