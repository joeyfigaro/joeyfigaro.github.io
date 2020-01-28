import React from 'react'
// import { css } from '@emotion/core'
// import { motion } from 'framer-motion'
// import Typical from 'react-typical'

import { Heading } from '../../Typography'
import { Section } from '../../Sections/'

type WhitespaceValues = 'nowrap' | 'pre' | 'normal'

// const whiteSpace = system({
//   whiteSpace: true
// })

// const ResponsiveBreak = styled.br`
//   ${mq({
//     display: ['none', 'block', 'block'],
//     lineHeight: ['0', 'normal', 'normal']
//   })}
// `

// const HeroPrimitive = styled(Column)`
//   transition: all 0.25s ease-out;
//   ${mq({
//     height: [325, 325, 375, 563, 786],
//     width: '85%',
//     minWidth: 375,
//     maxWidth: 1200
//   })}
// `

// const HeadingPrimitive = styled(Heading)<
//   TypographyProps & { whiteSpace?: WhitespaceValues | WhitespaceValues[] }
// >`
//   ${typography}
//   ${whiteSpace}
//   // letter-spacing: 1%;
//   max-width: 735px;
// `

// const typedHeader = css({ width: '192px', height: '705px' })

const Hero = () => (
  <Section>
    <Heading xl>
      I build engaging interfaces, applications, and experiences
    </Heading>
  </Section>
)

Hero.displayName = 'Hero'

export default Hero
