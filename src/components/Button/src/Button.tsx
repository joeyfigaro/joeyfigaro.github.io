import React from 'react'
import styled from '@emotion/styled'
import { layout, space, SpaceProps } from 'styled-system'
import cx from 'classnames'

import styles from '../styles.module.scss'

type ButtonProps = {
  variant: 'plain' | 'outlined' | 'link'
  className?: string | string[]
  onClick: (e: any) => void
  children: string
} & SpaceProps

const ButtonBase = styled.button<ButtonProps>`
  ${space}
  ${layout}
`

const Button = ({
  onClick = () => console.log('clicked'),
  variant = 'outlined',
  children,
  ...props
}: ButtonProps) => (
  <ButtonBase
    className={cx(styles.Button, styles[variant])}
    onClick={onClick}
    type="button"
    {...props}
  >
    {children}
  </ButtonBase>
)

export default Button
