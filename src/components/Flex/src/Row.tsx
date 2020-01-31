import React from 'react'
import cx from 'classnames'

import styles from '../styles.module.scss'

type RowProps = {
  width?: string | number
  className?: string
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline'
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
  children: React.ReactNode
}

const Row = ({
  align = 'center',
  justify = 'space-between',
  children,
  ...props
}: RowProps) => (
  <div className={cx(styles.flex, styles.Row, props.className)}>{children}</div>
)

export default Row
