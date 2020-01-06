import React from 'react'

import mq from '../../../responsive'
import styled from '../../../theme'
import { Column, Row } from '../../Flex'

const CopyrightContainer = styled(p => <Column {...p}>{p.children}</Column>)`
  white-space: nowrap;
  height: 93px;
  padding: 24px;
  border-top: #1e1e1e solid 1px;
  background-color: #0c0c0c;
  letter-spacing: 0.4px;
`

const PromptText = styled.span`
  color: ${p => p.theme.colors.white};
  ${mq({
    fontSize: [11, 11, 14]
  })};
`

const Prompt = styled.span`
  font-weight: 800;
`

const PromptValue = styled.span`
  color: ${p => p.theme.colors.green};
  font-weight: ${p => p.theme.fontWeights[3]};
  padding-left: 6px;
`

const PromptOutput = styled.span`
  color: ${p => p.theme.colors.ash};
`

const Copyright = () => (
  <CopyrightContainer align="center" justify="center">
    <Column width={[1, 1082]} align="flex-start">
      <Row mb={1} justify="flex-start">
        <Prompt>$ figs@mblocal ></Prompt>
        <PromptValue>copyright</PromptValue>
      </Row>
      <PromptOutput>Joey Figaro © 2019, All Rights Reserved</PromptOutput>
    </Column>
  </CopyrightContainer>
)

export default Copyright
