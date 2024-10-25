import { NavLink } from "react-router-dom"
import IgniteLogo from "../assets/Logo.svg"
import { Timer, Scroll } from "@phosphor-icons/react"


//Decidi estilizar isso no globals.css com o .active
//Mas esta seria uma outra forma de fazer.
{/* <NavLink to="/home" className="group">
    <span className="group-[.active]:underline">Home</span>
</NavLink> */}

//TODO Tooltip
//https://daisyui.com/components/tooltip/
//https://www.radix-ui.com/primitives/docs/components/tooltip


export function Header(){
  return (
    <header className="flex justify-between w-full">
      <img src={IgniteLogo} alt="#" className="size-10" />
      <nav className="flex gap-2" >
        <NavLink to={"/"} className="size-12 flex justify-center items-center border-b-[3px] border-transparent hover:border-green"> 
          <Timer size={24} className="text-gray7"/>
        </NavLink>
        <NavLink to={"/history"} className="flex justify-center items-center size-12 border-b-[3px] border-transparent hover:border-green"> 
          <Scroll size={24} className="text-gray7 "/>
        </NavLink>
      </nav>
    </header>
  )
}