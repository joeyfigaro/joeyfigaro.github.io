import React from 'react'
import styled from '@emotion/styled'
import { system, typography, TypographyProps } from 'styled-system'

import Button from '../../Button'
import mq, { px, py } from '../../../responsive'
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

const HeroPrimitive = styled(Column)`
  transition: all 0.25s ease-out;
  ${mq({
    height: [325, 325, 375, 563, 786],
    width: '85%',
    minWidth: 375,
    maxWidth: 1200
  })}
`

const HeroHeading = styled.h1<
  TypographyProps & { whiteSpace?: WhitespaceValues | WhitespaceValues[] }
>`
  ${typography}
  ${whiteSpace}
  letter-spacing: 1%;
  max-width: 705px;
  ${mq({
    fontSize: [34, 34, 48, 48, 56],
    lineHeight: ['34px', '34px', '56px', '56px', '64px']
  })}
`

const Hero = () => (
  <HeroPrimitive
    align="flex-start"
    justify="center"
    // width={[1, 1, 1082]}
    // px={[24, 32, 0]}
    // py={[50, 192]}
    m="auto"
  >
    {/*
      fontSize={[24, 36, 56]} lineHeight={['32px', '52px', '68px']}
    */}
    <HeroHeading>
      I build engaging interfaces, applications, & experiences
    </HeroHeading>
    <Row justify="flex-start" mt={[32, 32, 48]}>
      <Button mr={16}>Download Resume</Button>
      <Button>Hire Me</Button>
    </Row>
  </HeroPrimitive>
)

Hero.displayName = 'Hero'

export default Hero
