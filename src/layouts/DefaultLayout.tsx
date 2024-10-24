import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

{/* <div className="2xl:w-[90.5rem] 2xl:h-[840px] xl:w-[70.5rem] lg:w-[50rem] h-[744px] bg-gray2 rounded"></div> */}

export function DefaultLayout(){
  return (
    // <div className="w-[calc(100vw-20rem)] h-[calc(100vh-10rem)] bg-gray2 rounded p-10">
    <div className="w-[74rem] h-[46.5rem] bg-gray2 rounded p-10">
      <Header />
      <Outlet /> 
    </div>
  )
}