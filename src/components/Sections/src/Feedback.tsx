import React from 'react'

import { Row, Column } from '../../Flex'
import { Heading, Subheading } from '../../Typography'

import Section from './Section'

import styles from '../styles.module.scss'

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

const Feedback = () => {
  return (
    <Section horizontal className={styles.Feedback}>
      <header>
        <Heading>Feedback</Heading>
      </header>
      <Column className={styles.content}>
        <Row className={styles.contentRow}>
          <Column>
            <p className={styles.Quote}>
              "Joey is a creative and dedicated worker with the desire to make
              an amazing product, and the talent to back it up. I don’t think
              I know anyone who has put more effort into developing their
              skillset and it shows; I work with him every opportunity I get."
            </p>
            <p className={styles.QuoteAttribution}>Giuseppe Mancone</p>
            <p className={styles.QuoteTitle}>Software Engineer at Amazon</p>
          </Column>
        </Row>
        <Row className={styles.contentRow}>
          <Column>
            <p className={styles.Quote}>
              "It is with pride when I say Joey Figaro has been my mentor,
              colleague, and friend for the past ten years. I have personally
              witnessed Joey excel in the field of web development and build
              a reputation for being nothing less than exceptional in the work
              that he does and to the people he interacts with."
            </p>
            <p className={styles.QuoteAttribution}>Blayze Markoya</p>
            <p className={styles.QuoteTitle}>Web Manager at Yale University</p>
          </Column>
        </Row>
      </Column>
    </Section>
  )
}

Feedback.displayName = 'Testimonials'

export default Feedback
