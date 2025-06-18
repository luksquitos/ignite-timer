import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface TaskProps {
  id: number,
  description: string,
  status: "pending" | "canceled" | "finished"
  createdAt: Date,
  minutesAmount: number,
}

export function Task({id, description, status, minutesAmount, createdAt}: TaskProps){
  const statusOptions = {
    "pending": ["bg-yellow", "Em andamento"],
    "canceled": ["bg-red", "Interrompido"],
    "finished": ["bg-green", "Concluído"]
  }
  const [color, p] = statusOptions[status]
  const publishedDateRelativeToNow = formatDistanceToNow(
    createdAt,
    {
      locale: ptBR,
      addSuffix: true
    }
  )

  return (
    <div className="mt-1 px-6 bg-[#29292e] h-[54px] grid grid-cols-11">
      <p className="flex items-center col-span-4 overflow-hidden">{description}</p>
      <p className="flex items-center col-span-2">{minutesAmount} minutos</p>
      <p className="flex items-center col-span-3">{publishedDateRelativeToNow}</p>
      <p className="flex items-center gap-2 col-span-2"> <span className={`size-2 ${color} ll rounded-full`}></span>{p}</p>
    </div>
  )
}