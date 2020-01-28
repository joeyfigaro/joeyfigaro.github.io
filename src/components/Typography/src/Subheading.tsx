import React from 'react'

import * as styles from '../styles.module.scss'

type ValidAsTypes = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Subheading = (props: {
  as: ValidAsTypes
  children: React.ReactNode
  style?: Record<string, any>
}) => {
  const { as: HeadingType = 'h2' } = props
  return (
    <HeadingType style={props.style} className={styles[HeadingType]}>
      {props.children}
    </HeadingType>
  )
}

export default Subheading
