import { Play } from "@phosphor-icons/react"


// Estava apenas testando o tailwind
export function Button(){
  return (
    <button className=" w-[40.5rem] h-12 flex justify-center items-center gap-2 bg-green-light rounded-lg text-gray7">
      <Play />
      <p>Começar</p>
    </button>
  )
}