import { FieldValues, UseFormRegister } from "react-hook-form"


interface InputProps {
  registerProperty: UseFormRegister<FieldValues>
}

export function Input({registerProperty}: InputProps){
  return(
    <div className="flex justify-center items-center gap-2">
      <p>Vou trabalhar em</p>
      <input 
        className="bg-transparent w-64 text-gray7 px-2 border-b-2 border-b-gray4 placeholder:text-gray4 focus:outline-none focus:border-b-gray7 "
        placeholder="Dê um nome para o seu projeto" 
        list="task-list"
        {...registerProperty("task")}
      />
      <datalist id="task-list">
        <option value="Estudar para prova" />
        <option value="Consertar Ronaldo" />
      </datalist>
      <p>durante</p>
      <div className="flex justify-center items-center border-b-2 border-b-gray4 gap-2">
        <button className="text-white">-</button>
        <input 
          type="number"
          className="overflow-hidden w-5 bg-transparent flex justify-center text-center focus:outline-none text-gray7"
          placeholder="00"
          {...registerProperty("numberInput", {valueAsNumber: true})} /* objeto de configuração*/
        />
        <button className="text-white">+</button>
      </div>
      <p>minutos.</p>
    </div>
  )
}