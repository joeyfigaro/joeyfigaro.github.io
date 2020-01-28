import React from 'react'

import ArrowLeft from '../../../images/arrow-left.svg'
import ArrowRight from '../../../images/arrow-right.svg'
import { Row, Column } from '../../Flex'
import Divider from '../../Divider'

import Section from './Section'

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
      <Column justify="space-between" align="flex-start" />
    </Section>
  )
}

Testimonials.displayName = 'Testimonials'

export default Testimonials
