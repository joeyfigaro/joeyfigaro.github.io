import React from 'react'
import cx from 'classnames'

import { Row, Column } from '../../Flex'
import { Heading, Subheading } from '../../Typography'

import Section from './Section'

import styles from '../styles.module.scss'

const Projects = () => {
  return (
    <Section horizontal className={styles.Projects}>
      <header>
        <Heading>Projects</Heading>
      </header>
      <Column className={cx(styles.content)}>
        <Row className={styles.contentRow}>
          <Column align="flex-start" className={styles.projectColumn}>
            <Subheading subtle as="h3">
              Author
            </Subheading>
            <Subheading
              as="h2"
              style={{ marginBottom: '32px', marginTop: '24px' }}
            >
              Human ID
            </Subheading>
            <Row className={styles.general}>
              <p>
                Javascript library for generating reasonably collision-resistant
                uids that are human friendly.
              </p>
            </Row>
          </Column>
          <Column align="flex-start" className={styles.projectColumn}>
            <Subheading subtle as="h3">
              Founder
            </Subheading>
            <Subheading
              as="h2"
              style={{ marginBottom: '32px', marginTop: '24px' }}
            >
              Shovel &amp; Sandbox
            </Subheading>
            <Row>
              <p>
                Software development agency serving clients in the US to help
                bring mobile and web ideas to life.
              </p>
            </Row>
          </Column>
        </Row>
      </Column>
    </Section>
  )
}

Projects.displayName = 'Projects'

export default Projects
