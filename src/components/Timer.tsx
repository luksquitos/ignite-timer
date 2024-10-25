import { NumberTimer } from "./NumberTimer"

export function Timer() {
  return (
    <div className="mt-14 w-full h-[12.5rem] flex justify-between items-start">
      <NumberTimer num={0}/>
      <NumberTimer num={0}/>
      <p className="text-green-dark h-full flex items-center font-mono-r font-bold text-[10rem]">:</p>
      <NumberTimer num={0}/>
      <NumberTimer num={0}/>
    </div>
  )
}