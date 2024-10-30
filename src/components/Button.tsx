import { Play, HandPalm } from "@phosphor-icons/react"

const ButtonVariants = {
  "green": "bg-green [&:not(:disabled):hover]:bg-green-dark",
  "red": "bg-red hover:bg-reddark",
}

// Estava apenas testando o tailwind
export function Button({color}: {color: "green" | "red" }){
  return (
    <button className={`mt-[76px] w-full h-12 flex justify-center items-center gap-2 rounded-lg ${ButtonVariants[color]} text-gray7  disabled:opacity-70 disabled:cursor-not-allowed `}>
      { color == "green" ? <Play size={24}/> : <HandPalm size={24}/>}
      <p>Começar</p>
    </button>
  )
}