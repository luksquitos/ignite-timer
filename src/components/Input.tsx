export function Input(){
  return(
    //FIXME André mencionou sobre colocar esse form envolta de tudo.
    // Porque pode ser reaproveitado para o Botão
    <form className="flex justify-center items-center gap-2">
      <p>Vou trabalhar em</p>
      <input 
        className="flex justify-center text-center bg-transparent w-64 text-gray7 px-2 border-b-2 border-b-gray4 placeholder:text-gray4 focus:outline-none focus:border-b-gray7 "
        placeholder="Dê um nome para o seu projeto" 
        />
      <p>durante</p>
      <div className="flex justify-center items-center border-b-2 border-b-gray4 gap-2">
        <button className="text-white">-</button>
        <input 
          className="w-5 bg-transparent flex justify-center text-center focus:outline-none text-gray7"
          placeholder="00"
        />
        <button className="text-white">+</button>
      </div>
      <p>minutos.</p>
    </form>
  )
}