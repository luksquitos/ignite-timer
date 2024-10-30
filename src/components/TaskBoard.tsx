import { Task } from "./Task";


export function TaskBoard(){
  return (
    <section>
      <header className="mt-8 px-6 w-full h-[54px] bg-gray3 text-gray7 grid grid-cols-11 rounded-tl-lg rounded-tr-lg">
        <p className="flex items-center col-span-4">Tarefa</p>
        <p className="flex items-center col-span-2">Duração</p>
        <p className="flex items-center col-span-3">Início</p>
        <p className="flex items-center col-span-2">Status</p>
      </header>
      <section className="w-full h-[408px] overflow-y-auto">
        {Array.from({length:10}).map(task=><Task/>)} 
      </section>
    </section>
  )
}

//Desisti de mexer com a Table :(
//
// export function TaskBoard(){
//   return (
//     <table className="mt-8  border-collapse ">
//       <thead className="">
//         <tr className="w-full grid grid-cols-6 text-gray7 h-14 ">
//           <th className="flex items-center bg-gray3 rounded-tl-lg pl-6 col-span-3 ">Tarefa</th>
//           <th className="flex items-center bg-gray3">Duração</th>
//           <th className="flex items-center bg-gray3">Início</th>
//           <th className="flex items-center bg-gray3 rounded-tr-lg pr-6">Status</th>
//         </tr>
//       </thead>
//       <tbody className=" h-[25.5rem] overflow-y-auto">
//         <div className="w-full border-2">

//           {Array.from({length:10}).map(task=><Task/>)} 
//         </div>
//       </tbody>
//     </table>
//   )
// }