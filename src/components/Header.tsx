import IgniteLogo from "../assets/Logo.svg"
import { Timer, Scroll } from "@phosphor-icons/react"

export function Header(){
  return (
    <header className="flex justify-between">
      <img src={IgniteLogo} alt="#" />
      <nav className="flex gap-2">
        <a href="#" className="size-12"><Timer size={24} className="text-white text-xs"/></a>
        <a href="#" className="size-12"><Scroll size={24} className="text-white"/></a>
      </nav>
    </header>
  )
}