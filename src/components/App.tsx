import { defaultTheme } from "../styles/themes/default"
import { Button } from "./Button"
import { ThemeProvider } from "styled-components"

export function App() {

  return (
    // Pode ser colocado no lugar do Fragment, já que o ThemeProvider não
    // é utilizado no CSS
    // Recebe o theme como parâmetro obrigatório.
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="warning"/>
      <Button variant="danger"/>
      <Button />
    </ThemeProvider >
  )
}
