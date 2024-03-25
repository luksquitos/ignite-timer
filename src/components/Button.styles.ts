import styled, { css } from "styled-components";

export type IVariantColors = "primary" | "secondary" | "warning" | "danger"

interface IButtonContainer {
  variant: IVariantColors
}

const colors = {
  primary: "blue",
  secondary: "light-blue",
  warning: "yellow",
  danger: "red"
}

export const ButtonContainer = styled.button<IButtonContainer>`
  width: 100px;
  height: 40px;
  color: white;
  ${props => {
    return css`background-color: ${colors[props.variant]}`
  }}
`