import React from 'react'
import cx from 'classnames'

import * as styles from '../styles.module.scss'

const Heading = (props: { xl?: boolean; children: React.ReactNode }) => (
  <h1 className={cx(styles.Heading, { [styles.xl]: props.xl })}>
    {props.children}
  </h1>
)

export default Heading
