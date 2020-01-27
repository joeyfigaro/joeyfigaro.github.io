import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import ArrowLeft from '../../../images/arrow-left.svg'
import ArrowRight from '../../../images/arrow-right.svg'
import { Row, Column } from '../../Flex'
import Divider from '../../Divider'

import Section from './Section'

const TestimonialSlide = styled(Column)`
  width: 100%;
  height: 184px;
  margin-bottom: 96px;
`

const IconButton = styled.button((props: { icon: React.ReactNode }) => )`
  appearance: none;
  background-color: transparent;
  border: none;
`

const Quote = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 200;
`

const Text = styled.p`
  margin-bottom: 0;
`

const Strong = styled(Text)`
  font-weight: 800;
`

const Separator = styled(Text)`
  padding: 0 8px;
`

// const slider = css`
//   width: 80%;
//   max-width: 1000px;
// `
const quotes = [
  {
    id: 1,
    text:
      '“I don’t think I know anyone who has put more effort into developing their skillset than Joey and it shows; I work with him every opportunity I get.”',
    author: 'Giuseppe Mancone',
    title: 'Software Development Engineer II',
    company: 'Amazon'
  },
  {
    id: 2,
    text: 'I like blimps',
    author: 'Meesa Massa',
    title: 'Expert Demolitionist IV',
    company: 'Explody Inc.'
  }
]

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState<number>(0)
  return (
    <Section>
      <Divider>Testimonials</Divider>
      <Column
        justify="space-between"
        align="flex-start"
        width="80%"
        maxWidth={1000}
      >
        <TestimonialSlide>
          <Quote>{quotes[currentTestimonial].text}</Quote>
        </TestimonialSlide>
        <Row justify="flex-start">
          <Row justify="space-between" width={56}>
            <Strong>0{quotes[currentTestimonial].id}</Strong>
            <Separator>/</Separator>
            <Text>0{quotes.length}</Text>
          </Row>
          <Row flex={3} justify="flex-start" px={32}>
            <Strong>{quotes[currentTestimonial].author}</Strong>
            <Separator>/</Separator>
            <Text>
              {quotes[currentTestimonial].title} @{' '}
              {quotes[currentTestimonial].company}
            </Text>
          </Row>
          <Row justify="space-between" width={56}>
            <IconButton
              onClick={() => setCurrentTestimonial(currentTestimonial - 1)}
              disabled={currentTestimonial === 0}
            >
              <ArrowLeft />
            </IconButton>
            <IconButton
              onClick={() => setCurrentTestimonial(currentTestimonial + 1)}
              disabled={currentTestimonial === quotes.length - 1}
            >
              <ArrowRight />
            </IconButton>
          </Row>
        </Row>
      </Column>
    </Section>
  )
}

Testimonials.displayName = 'Testimonials'

export default Testimonials
