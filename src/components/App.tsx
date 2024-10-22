import { Router } from "../Router"
import { BrowserRouter } from "react-router-dom"
import TailwindBreakpoint from "./TailwindBreakpoint"
// CTRL + SHIPT + P 
// TypeScript Remove all unused imports

export function App() {

  return (
    <BrowserRouter>
      <main className="bg-gray1 h-screen flex justify-center items-center">
        <TailwindBreakpoint/>
        <Router />
      </main>
    </BrowserRouter>
  )
}
