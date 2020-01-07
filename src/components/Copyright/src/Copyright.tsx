import React from 'react'

import mq from '../../../responsive'
import styled from '../../../theme'
import { Column, Row } from '../../Flex'

const CopyrightPrimitive = styled(p => <Column {...p}>{p.children}</Column>)`
  white-space: nowrap;
  width: 100%;
  height: 92px;
  padding: 32px 0;
  background-color: #080808;
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
  <CopyrightPrimitive align="center" justify="center">
    <Column width={[1, '85%']} maxWidth={1200} align="flex-start">
      <Row mb={1} justify="flex-start">
        <Prompt>$ figs@mblocal ></Prompt>
        <PromptValue>copyright</PromptValue>
      </Row>
      <PromptOutput>Joey Figaro © 2019, All Rights Reserved</PromptOutput>
    </Column>
  </CopyrightPrimitive>
)

Copyright.displayName = 'Copyright'

export default Copyright
