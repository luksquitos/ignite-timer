export function TaskBoard(){
  return (
    <table className="mt-8 w-full border-collapse overflow-hidden">
      <thead className="bg-gray3 rounded-tl-lg">
        <tr className="text-gray7 h-14 ">
          <th className="text-start pl-6">Tarefa</th>
          <th className="text-start">Duração</th>
          <th className="text-start">Início</th>
          <th className="text-start pr-6">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white">
          <td>Conserto de ronaldos</td>
          <td>25 minutos</td>
          <td>Há cerca de 2 meses</td>
          <td>EM andamento</td>
        </tr>
      </tbody>
    </table>
  )
}