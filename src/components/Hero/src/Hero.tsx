import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { system, typography, TypographyProps } from 'styled-system'
import { motion } from 'framer-motion'
import Typical from 'react-typical'

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
  max-width: 735px;
  ${mq({
    fontSize: [34, 34, 48, 48, 56],
    lineHeight: ['34px', '34px', '56px', '56px', '64px'],
    height: ['auto', 'auto', 'auto', 130, 130]
  })}
`

const typedHeader = css({ width: '192px', height: '705px' })

const Hero = () => (
  <motion.div animate={{ opacity: 1 }} style={{ opacity: 0 }}>
    <HeroPrimitive align="flex-start" justify="center" m="auto">
      <Typical
        steps={[
          'I build',
          150,
          'I build engaging',
          180,
          'I build engaging interfaces,',
          180,
          'I build engaging interfaces, applications,',
          120,
          'I build engaging interfaces, applications, &',
          120,
          'I build engaging interfaces, applications, & experiences.'
        ]}
        wrapper={HeroHeading}
        className={typedHeader}
      />
      <Row justify="flex-start" mt={[32, 32, 48]}>
        <motion.div
          animate={{
            y: 0,
            opacity: 1
          }}
          initial={{ y: 50, opacity: 0 }}
        >
          <Button mr={16}>Download Resume</Button>
        </motion.div>
        <motion.div
          animate={{
            y: 0,
            opacity: 1
          }}
          initial={{ y: 100, opacity: 0 }}
        >
          <Button>Hire Me</Button>
        </motion.div>
      </Row>
    </HeroPrimitive>
  </motion.div>
)

Hero.displayName = 'Hero'

export default Hero
