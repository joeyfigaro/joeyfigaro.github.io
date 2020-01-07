import React from 'react'
import styled from '@emotion/styled'

import { Column } from '../../Flex'
import mq from '../../../responsive'

type SectionProps = {
  maxWidth?: number
  children: React.ReactNode
}

const SectionPrimitive = styled(Column)<SectionProps>`
  ${p =>
    mq({
      transition: 'all 0.25s ease-out',
      paddingBottom: [56, 56, 112],
      width: ['100%', '100%', p.maxWidth]
    })};
`

const Section = (props: any) => {
  return (
    <SectionPrimitive width={3 / 4} align="center" {...props}>
      {props.children}
    </SectionPrimitive>
  )
}

SectionPrimitive.displayName = 'SectionPrimitive'
Section.displayName = 'Section'

export default Section
