import React from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'

import styles from '../styles.module.scss'

type SectionProps = {
  maxWidth?: number
  horizontal?: boolean
  children: React.ReactNode
  className?: string
}

const Section = ({ horizontal = false, children, ...props }: SectionProps) => {
  return (
    <motion.section
      className={cx(
        styles.Section,
        {
          [styles.horizontal]: horizontal
        },
        props.className
      )}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.section>
  )
}

Section.displayName = 'Section'

export default Section
