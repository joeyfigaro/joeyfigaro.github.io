import React from 'react'
import styled from '@emotion/styled'
import { system, typography, TypographyProps } from 'styled-system'

import Button from '../../Button'
import mq from '../../../responsive'
import { Row, Column } from '../../Flex'

type WhitespaceValues = 'nowrap' | 'pre' | 'normal'

const whiteSpace = system({
  whiteSpace: true
})

const ResponsiveBreak = styled.br`
  ${mq({
    display: ['none', 'block', 'block'],
    lineHeight: ['0', 'normal', 'normal']
  })}
`

const HeroHeading = styled.h1<
  TypographyProps & { whiteSpace?: WhitespaceValues | WhitespaceValues[] }
>`
  ${typography}
  ${whiteSpace}
  letter-spacing: 1%;
`

const Hero = () => (
  <Column
    align="flex-start"
    justify="center"
    width={[1, 1, 1082]}
    px={[24, 32, 0]}
    py={[50, 192]}
    m="auto"
  >
    <HeroHeading fontSize={[24, 36, 56]} lineHeight={['32px', '52px', '68px']}>
      I build engaging interfaces, <ResponsiveBreak /> applications, &
      experiences
    </HeroHeading>
    <Row
      justify="flex-start"
      mt={[32, 32, 48]}
      flexDirection={['column', 'row']}
    >
      <Button width={['100%', 'auto']} mr={[0, 0, 16]} mb={[2, 0, 0]}>
        Download Resume
      </Button>
      <Button width={['100%', 'auto']}>Hire Me</Button>
    </Row>
  </Column>
)

Hero.displayName = 'Hero'

export default Hero
