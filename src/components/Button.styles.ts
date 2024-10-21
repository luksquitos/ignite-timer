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
  margin: 6px;
  border: 0;
  border-radius: 4px;
  
  color: ${props => props.theme.color}; //É possível acessar o atributo themes por aqui
  /* background-color: ${props => props.theme.secondary}; */
  /* ${props => {
    return css`background-color: ${colors[props.variant]}`
  }} */
`