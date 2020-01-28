import React from 'react'

import JSBadge from '../../../images/badges/JS.svg'
import UXBadge from '../../../images/badges/UX.svg'
import UIBadge from '../../../images/badges/UI.svg'
import CIBadge from '../../../images/badges/CI.svg'
import CDBadge from '../../../images/badges/CD.svg'

import { Heading, Subheading } from '../../Typography'
import { Row, Column } from '../../Flex'

import Section from './Section'

const Experience = () => (
  <Section width={1000} m="auto" align="flex-start">
    <header>
      <Heading>
        Skills &amp;
        <br /> Proficiencies
      </Heading>
    </header>
    <Row width={667} align="flex-start" justify="flex-start">
      <Column align="flex-start">
        <Subheading as="h3">00.</Subheading>
        <Subheading as="h2" style={{ marginBottom: '32px', marginTop: '24px' }}>
          General
        </Subheading>
        <Row>
          <Column align="flex-start">
            <ul>
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
          <Column align="flex-start">
            <ul>
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
        <Subheading as="h3">01.</Subheading>
        <Subheading as="h2" style={{ marginBottom: '32px', marginTop: '24px' }}>
          Roles
        </Subheading>
        <Row>
          <Column align="flex-start">
            <ul>
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
  </Section>
)

export default Experience
