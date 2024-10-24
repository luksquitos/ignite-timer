export function Input(){
  return(
    <form className="flex justify-center items-center mt-[72px]">
      <p>Vou trabalhar em</p>
      <input 
        className="bg-transparent w-64 text-white px-2 border-b-2 border-b-gray4 placeholder:text-gray4 flex justify-center text-center"
        placeholder="Dê um nome para o seu projeto" /
      >
      <p>durante</p>
      <div className="flex justify-center items-center">
        <button className="text-white">-</button>
        <p>00</p>
        <button className="text-white">+</button>
        <p>minutos.</p>
      </div>
    </form>
  )
}