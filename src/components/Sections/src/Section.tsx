import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { Column } from '../../Flex'
import mq from '../../../responsive'

type SectionProps = {
  maxWidth?: number
  children: React.ReactNode
}

const SectionPrimitive = styled(Column)<SectionProps>`
  ${({ maxWidth }) =>
    mq({
      transition: 'all 0.25s ease-out',
      paddingBottom: [56, 56, 112],
      width: ['100%', '100%', maxWidth]
    })};
`

const Section = (props: any) => {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <SectionPrimitive width={3 / 4} align="center" {...props}>
        {props.children}
      </SectionPrimitive>
    </motion.div>
  )
}

SectionPrimitive.displayName = 'SectionPrimitive'
Section.displayName = 'Section'

export default Section
