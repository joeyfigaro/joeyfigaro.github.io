import React from 'react'
import styled from '@emotion/styled'
import { layout, space, SpaceProps } from 'styled-system'

type ButtonProps = {
  onClick: (e: any) => void
  children: string
} & SpaceProps

const ButtonBase = styled.button<ButtonProps>`
  ${space}
  ${layout}
  cursor: pointer;
  padding: 8px 16px;
  background-color: transparent;
  color: #fefefe;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  border: #fefefe solid 1px;
  border-radius: 24px;
`

const Button = ({
  onClick = () => console.log('clicked'),
  children,
  ...props
}: ButtonProps) => (
  <ButtonBase className="Button" onClick={onClick} type="button" {...props}>
    {children}
  </ButtonBase>
)

export default Button
