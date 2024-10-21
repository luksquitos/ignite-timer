import { Header } from "./Header"

// CTRL + SHIPT + P 
// TypeScript Remove all unused imports

export function App() {

  return (
    // Pode ser colocado no lugar do Fragment, já que o ThemeProvider não
    // é utilizado no CSS
    // Recebe o theme como parâmetro obrigatório.
    <main className="">
      <Header />
    </main>
  )
}
