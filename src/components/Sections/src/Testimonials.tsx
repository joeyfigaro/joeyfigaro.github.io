import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import ArrowLeft from '../../../images/arrow-left.svg'
import ArrowRight from '../../../images/arrow-right.svg'
import { Row, Column } from '../../Flex'
import Divider from '../../Divider'

import Section from './Section'

const TestimonialSlide = styled(Column)`
  height: 184px;
  margin-bottom: 96px;
`

const Quote = styled.h2`
  font-size: 36px;
  line-height: 44px;
  font-weight: 200;
`

const slider = css`
  width: 85%;
  max-width: 1085px;
`

const Testimonials = () => (
  <Section>
    <Divider>Testimonials</Divider>
    <CarouselProvider
      touchEnabled
      css={slider}
      naturalSlideWidth={1085}
      naturalSlideHeight={184}
      totalSlides={2}
    >
      <Slider>
        <Slide index={0}>
          <Quote>
            User-focused with laser precision, Joey asks the right questions
            to polish a product. I don’t think I know anyone who has put more
            effort into developing their skillset than Joey and it shows; I work
            with him every opportunity I get.
          </Quote>
        </Slide>
        <Slide index={0}>
          <Quote>
            User-focused with laser precision, Joey asks the right questions
            to polish a product. I don’t think I know anyone who has put more
            effort into developing their skillset than Joey and it shows; I work
            with him every opportunity I get.
          </Quote>
        </Slide>
        <ButtonBack>
          <ArrowLeft />
        </ButtonBack>
        <ButtonNext>
          <ArrowRight />
        </ButtonNext>
      </Slider>
    </CarouselProvider>
  </Section>
)

Testimonials.displayName = 'Testimonials'

export default Testimonials
