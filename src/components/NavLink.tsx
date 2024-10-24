import { ReactNode } from "react"
import { NavLink as NL } from "react-router-dom"

export function NavLink({children, to}:{to:string, children:ReactNode}){
  return <NL to={to} className="flex justify-center items-center size-12 border-b-[3px] border-transparent hover:border-b-[3px] hover:border-green">
    {children}
  </NL> 
}