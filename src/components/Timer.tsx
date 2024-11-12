import { NumberTimer } from "./NumberTimer"

export function Timer({currentTime}:{currentTime: Date,}) {
  const minutes = currentTime? String(currentTime.getMinutes()).padStart(2, "0"): "00"
  const seconds = currentTime? String(currentTime.getSeconds()).padStart(2, "0"): "00"
  
  return (
    <div className="mt-14 w-full h-[12.5rem] flex justify-between items-start">
      <NumberTimer num={Number(minutes[0])}/>
      <NumberTimer num={Number(minutes[1])}/>
      <p className="text-green-dark h-full flex items-center font-mono-r font-bold text-[10rem]">:</p>
      <NumberTimer num={Number(seconds[0])}/>
      <NumberTimer num={Number(seconds[1])}/>
    </div>
  )
}