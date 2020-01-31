import React from 'react'
import cx from 'classnames'

import styles from '../styles.module.scss'

type ValidAsTypes = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Subheading = (props: {
  as: ValidAsTypes
  children: React.ReactNode
  style?: Record<string, any>
  subtle?: boolean
}) => {
  const { as: HeadingType = 'h2' } = props
  return (
    <HeadingType
      style={props.style}
      className={cx(styles[HeadingType], { [styles.subtle]: props.subtle })}
    >
      {props.children}
    </HeadingType>
  )
}

export default Subheading
