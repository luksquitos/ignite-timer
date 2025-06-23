import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import { TaskProps } from "../components/Task"

interface TasksContextInterface {
	tasks: TaskProps[],
	setTasks: Dispatch<SetStateAction<TaskProps[]>>
}

const TasksContext = createContext<TasksContextInterface | undefined>(undefined)

export function TasksContextProvider({initial, children}: {initial: TaskProps[]; children: ReactNode}){
	const [tasks, setTasks] = useState<TaskProps[]>(initial)

	return (
		<TasksContext.Provider value={{tasks, setTasks}}>
			{children}
		</TasksContext.Provider>
	)
}

export function useTasks(){
	const context = useContext(TasksContext)
	if (!context){
		throw new Error("useTasks must be used inside a bagre")
	}

	return context
}

