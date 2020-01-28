import React from 'react'
import cx from 'classnames'

import styles from '../styles.module.scss'

type ButtonProps = {
  variant: 'plain' | 'outlined' | 'link'
  className?: string | string[]
  onClick: (e: any) => void
  children: string
}

// const ButtonBase = styled.button<ButtonProps>`
//   ${space}
//   ${layout}
// `

const Button = ({
  onClick = () => console.log('clicked'),
  variant = 'outlined',
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cx(styles.Button, styles[variant])}
    onClick={onClick}
    type="button"
    {...props}
  >
    {children}
  </button>
)

export default Button
