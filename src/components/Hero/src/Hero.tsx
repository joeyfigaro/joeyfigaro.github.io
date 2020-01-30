import React from 'react'
// import { css } from '@emotion/core'
// import { motion } from 'framer-motion'
// import Typical from 'react-typical'

import Curves from './Curves'
import { Heading } from '../../Typography'
import { Section } from '../../Sections/'

import styles from '../styles.module.scss'

class Hero extends React.Component {
  static displayName = 'Hero'

  render() {
    return (
      <Section className={styles.Hero}>
        <div className={styles.HeadingShadow}>
          <Heading className={styles.Heading} xl>
            I build engaging interfaces, applications, and experiences
          </Heading>
        </div>
        <Curves />
      </Section>
    )
  }
}

export default Hero
