import { defaultTheme } from "../styles/themes/default"
import { Button } from "./Button"
import { ThemeProvider } from "styled-components"
import { Header } from "./Header"

export function App() {

  return (
    // Pode ser colocado no lugar do Fragment, já que o ThemeProvider não
    // é utilizado no CSS
    // Recebe o theme como parâmetro obrigatório.
    <Header />
  )
}
