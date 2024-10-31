import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Timer } from "../components/Timer";

export function Home(){
  return (
    <form className="mt-[75px] w-[655px] h-[420px]">
      <Input/>
      <Timer/>
      <Button color="green" disabled />
    </form>
  )
}