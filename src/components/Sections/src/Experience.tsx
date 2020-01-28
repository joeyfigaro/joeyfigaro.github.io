import React from 'react'
import styled from '@emotion/styled'
import { typography, space } from 'styled-system'

import JSBadge from '../../../images/badges/JS.svg'
import UXBadge from '../../../images/badges/UX.svg'
import UIBadge from '../../../images/badges/UI.svg'
import CIBadge from '../../../images/badges/CI.svg'
import CDBadge from '../../../images/badges/CD.svg'

import { Heading, Subheading } from '../../Typography'
import { Row, Column } from '../../Flex'
import Divider from '../../Divider'

import Section from './Section'

const ColumnHeader = styled.h2(typography, space, {
  textTransform: 'uppercase',
  fontFamily: 'Cartograph CF',
  marginBottom: 32
})

const ListItem = styled.p(typography, space, {
  marginBottom: 16,
  color: '#ffffff'
})
const Link = ListItem.withComponent('a')

const List = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
`

const Experience = () => (
  <Section width={1000} m="auto" align="flex-start">
    <header>
      <Heading>
        Skills &amp;
        <br /> Proficiencies
      </Heading>
    </header>
    <Row width={667} align="flex-start" justify="flex-start">
      <Column width={3 / 4} align="flex-start">
        <Subheading as="h3">00.</Subheading>
        <Subheading as="h2" style={{ marginBottom: '32px', marginTop: '24px' }}>
          General
        </Subheading>
        <Row>
          <Column flex={1} align="flex-start">
            <List>
              <li>Typescript</li>
              <li>Reactotron</li>
              <li>Husky</li>
              <li>Commitlint</li>
              <li>Webpack</li>
              <li>Rollup</li>
              <li>CRA</li>
              <li>Github/Git</li>
              <li>zsh</li>
            </List>
          </Column>
          <Column flex={1} align="flex-start">
            <List>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Sketch</li>
              <li>Zeplin</li>
              <li>Craft/Invision</li>
              <li>Storybook</li>
            </List>
          </Column>
        </Row>
      </Column>
      <Column width={1 / 4} align="flex-start">
        <Subheading as="h3">01.</Subheading>
        <Subheading as="h2" style={{ marginBottom: '32px', marginTop: '24px' }}>
          Roles
        </Subheading>
        <Row>
          <Column flex={1} align="flex-start">
            <List>
              <li>Web Designer</li>
              <li>UI Developer</li>
              <li>Web Developer</li>
              <li>Senior Web Developer</li>
              <li>Lead React Developer</li>
            </List>
          </Column>
        </Row>
      </Column>
    </Row>
  </Section>
)

export default Experience
