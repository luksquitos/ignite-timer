import { Play } from "@phosphor-icons/react"


// Estava apenas testando o tailwind
export function Button(){
  return (
    <button disabled className="mt-[76px] w-full h-12 flex justify-center items-center gap-2 bg-green rounded-lg text-gray7 [&:not(:disabled):hover]:bg-green-dark disabled:opacity-70 disabled:cursor-not-allowed">
      <Play />
      <p>Começar</p>
    </button>
  )
}