import React from 'react'

import JSBadge from '../../../images/badges/JS.svg'
import UXBadge from '../../../images/badges/UX.svg'
import UIBadge from '../../../images/badges/UI.svg'
import CIBadge from '../../../images/badges/CI.svg'
import CDBadge from '../../../images/badges/CD.svg'

import { Heading, Subheading } from '../../Typography'
import { Row, Column } from '../../Flex'

import Section from './Section'

import styles from '../styles.module.scss'

const Experience = () => (
  <Section horizontal className={styles.Experience}>
    <header>
      <Heading>
        Skills &amp;
        <br /> Proficiencies
      </Heading>
    </header>
    <Column className={styles.content}>
      <Row className={styles.contentRow}>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            00.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            General
          </Subheading>
          <Row className={styles.general}>
            <Column className={styles.halfWidth}>
              <ul className={styles.list}>
                <li>Typescript</li>
                <li>Reactotron</li>
                <li>Husky</li>
                <li>Commitlint</li>
                <li>Webpack</li>
                <li>Rollup</li>
                <li>CRA</li>
                <li>Github/Git</li>
                <li>zsh</li>
              </ul>
            </Column>
            <Column className={styles.halfWidth}>
              <ul className={styles.list}>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Sketch</li>
                <li>Zeplin</li>
                <li>Craft/Invision</li>
                <li>Storybook</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column align="flex-start">
          <Subheading subtle as="h3">
            01.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            Roles
          </Subheading>
          <Row>
            <Column align="flex-start">
              <ul className={styles.list}>
                <li>Web Designer</li>
                <li>UI Developer</li>
                <li>Web Developer</li>
                <li>Senior Web Developer</li>
                <li>Lead React Developer</li>
              </ul>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row className={styles.contentRow}>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            02.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            User Interface
          </Subheading>
          <Row>
            <Column>
              <ul className={styles.list}>
                <li>React</li>
                <li>Sass</li>
                <li>Emotion</li>
                <li>Styled-Components</li>
                <li>CSS Modules</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            03.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            State Management
          </Subheading>
          <Row>
            <Column align="flex-start">
              <ul className={styles.list}>
                <li>Overmind</li>
                <li>Redux</li>
                <li>Context</li>
                <li>Reselect</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            04.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            Side Effects
          </Subheading>
          <Row>
            <Column align="flex-start">
              <ul className={styles.list}>
                <li>Redux-Saga</li>
                <li>Redux-Thunk</li>
                <li>Overmind</li>
              </ul>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row className={styles.contentRow}>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            05.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            API Development
          </Subheading>
          <Row>
            <Column>
              <ul className={styles.list}>
                <li>Node</li>
                <li>Express/Fastify</li>
                <li>Mongoose</li>
                <li>Knex</li>
                <li>Postgres</li>
                <li>Mongo</li>
                <li>Redis</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            06.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            Infrastructure
          </Subheading>
          <Row>
            <Column align="flex-start">
              <ul className={styles.list}>
                <li>AWS</li>
                <li>Codeship</li>
                <li>Sentry</li>
                <li>Now</li>
                <li>Ngrok</li>
                <li>Docker</li>
              </ul>
            </Column>
          </Row>
        </Column>
        <Column className={styles.column} align="flex-start">
          <Subheading subtle as="h3">
            07.
          </Subheading>
          <Subheading
            as="h2"
            style={{ marginBottom: '32px', marginTop: '24px' }}
          >
            Testing
          </Subheading>
          <Row>
            <Column align="flex-start">
              <ul className={styles.list}>
                <li>Jest</li>
                <li>Tape</li>
                <li>React Testing Library</li>
                <li>Enzyme</li>
              </ul>
            </Column>
          </Row>
        </Column>
      </Row>
    </Column>
  </Section>
)

export default Experience
