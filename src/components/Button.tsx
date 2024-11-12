import { Play, HandPalm } from "@phosphor-icons/react"

const ButtonVariants = {
  "green": "bg-green [&:not(:disabled):hover]:bg-green-dark",
  "red": "bg-red hover:bg-reddark",
}


export function Button({hasActiveTask, interruptTimer, ...props}: {hasActiveTask: boolean; [key: string]: any} ){
  if(hasActiveTask){
    return (
      <button onClick={interruptTimer} className={`mt-[76px] w-full h-12 flex justify-center items-center gap-2 rounded-lg ${ButtonVariants['red']} text-gray7  disabled:opacity-70 disabled:cursor-not-allowed `}>
        <HandPalm size={24}/>
        <p>Interromper</p>
      </button>
    )
  }
  
  return (
    <button {...props} type="submit" className={`mt-[76px] w-full h-12 flex justify-center items-center gap-2 rounded-lg ${ButtonVariants['green']} text-gray7  disabled:opacity-70 disabled:cursor-not-allowed `}>
      <Play size={24}/>
      <p>Começar</p>
    </button>
  )
}