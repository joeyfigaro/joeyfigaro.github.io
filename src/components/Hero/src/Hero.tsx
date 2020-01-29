import React from 'react'
// import { css } from '@emotion/core'
// import { motion } from 'framer-motion'
// import Typical from 'react-typical'

import { Heading } from '../../Typography'
import { Section } from '../../Sections/'

import styles from '../styles.module.scss'

const Hero = () => (
  <Section className={styles.Hero}>
    <Heading className={styles.Heading} xl>
      I build engaging interfaces, applications, and experiences
    </Heading>
  </Section>
)

Hero.displayName = 'Hero'

export default Hero
