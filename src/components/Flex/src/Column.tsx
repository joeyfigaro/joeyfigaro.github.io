import React from 'react'
import cx from 'classnames'

import styles from '../styles.module.scss'

type ColumnProps = {
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  className?: string
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
  children?: React.ReactNode
}

const Column = ({
  align = 'center',
  justify = 'space-between',
  className,
  children,
  ...props
}: ColumnProps) => (
  <div className={cx(styles.flex, styles.Column, className)} {...props}>
    {children}
  </div>
)

export default Column
