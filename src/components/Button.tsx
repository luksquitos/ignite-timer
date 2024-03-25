import { ButtonContainer } from './Button.styles'

interface IButton {
  variant?: "primary" | "secondary" | "warning" | "danger"
}

export function Button({variant = "primary"}: IButton) {
  return (
    <>
      <ButtonContainer variant={variant}>Clique Aqui</ButtonContainer>
    </>
  )
}