import { Play } from "@phosphor-icons/react"


// Estava apenas testando o tailwind
export function Button(){
  return (
    <button className="mt-[76px] w-full h-12 flex justify-center items-center gap-2 bg-green rounded-lg text-gray7 hover:bg-green-dark disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green">
      <Play />
      <p>Começar</p>
    </button>
  )
}