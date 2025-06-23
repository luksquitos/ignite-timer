import { TasksContextProvider } from "../contexts/TasksContext"
import { Router } from "../Router"
import { BrowserRouter } from "react-router-dom"
import { TaskProps } from "./Task"
import { TimerContextProvider } from "../contexts/TimerContext"
// import TailwindBreakpoint from "./TailwindBreakpoint"
// CTRL + SHIPT + P 
// TypeScript Remove all unused imports

const tasksJson: TaskProps[] = [
  {
    "id": "asdf",
    "description": "Treinando meu dragão",
    "status": "finished",
    "minutesAmount": 60,
    "createdAt": new Date("2025-01-10 10:00:00")
  },
  {
    "id": "asdfg",
    "description": "Almoçar",
    "status": "finished",
    "minutesAmount": 14,
    "createdAt": new Date("2025-06-18 12:00:00")
  },
  {
    "id": "asdfgh",
    "description": "Estudar React Nature",
    "status": "finished",
    "minutesAmount": 60,
    "createdAt": new Date("2025-06-18 15:00:00")
  },
  {
    "id": "asdfghjk",
    "description": "Jogar com os amigos",
    "status": "canceled",
    "minutesAmount": 60,
    "createdAt": new Date("2025-05-10 16:14:00")
  },
]

export function App() {

  return (
    <BrowserRouter>
        <main className="bg-gray1 h-screen flex justify-center items-center">
          <TasksContextProvider initial={tasksJson}>
            <TimerContextProvider>
              <Router />
            </TimerContextProvider>
          </TasksContextProvider>
        </main>
    </BrowserRouter>
  )
}
