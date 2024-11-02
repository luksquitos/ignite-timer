import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Timer } from "../components/Timer";
import { useForm } from "react-hook-form";


export function Home(){
  const { register, handleSubmit, watch } = useForm();
  const buttonDisabled = !watch("task") || !watch("numberInput")
  
  function createNewTask(data: any){
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(createNewTask)} className="mt-[75px] w-[655px] h-[420px]">
      <Input registerProperty={register}/> 
      <Timer/>
      <Button color="green" disabled={buttonDisabled} />
    </form>
  )
}