import { Router } from "../Router"
import { Header } from "./Header"
import { BrowserRouter } from "react-router-dom"
// CTRL + SHIPT + P 
// TypeScript Remove all unused imports

export function App() {

  return (
    <BrowserRouter>
      <main className="bg-gray1 h-screen">
        <Router />
      </main>
    </BrowserRouter>
  )
}
