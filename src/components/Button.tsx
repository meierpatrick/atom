import { COLOR } from 'consts'
import { ButtonHTMLAttributes, ReactElement } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
`

const StyledDefaultButton = styled.button<ButtonProps>`
  padding: 16px 8px;
  width: 100%;
  border-radius: 6px;
  background-image: -webkit-linear-gradient(to right, #a722f4 0%, #7a5cff 100%);
  background-image: linear-gradient(to right, #a722f4 0%, #7a5cff 100%);
  color: ${COLOR.white};
  font-size: 14px;
  text-align: center;
  border-style: none;
  box-sizing: border-box;
  user-select: none;
  font-weight: 500;

  cursor: pointer;
  :hover {
    background-color: ${COLOR.primary};
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps): ReactElement => {
  const { ...rest } = props

  return (
    <StyledContainer>
      <StyledDefaultButton type="button" {...rest} />
    </StyledContainer>
  )
}

export default Button
