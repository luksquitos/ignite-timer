export function NumberTimer({num}: {num: number}){
  return (
    <div className="w-32 h-full bg-[#29292E] rounded-lg flex justify-center items-center">
      <p className="text-gray7 font-mono-r font-bold text-[10rem]">
        {num}
      </p>
    </div>
  )
}