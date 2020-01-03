import React from 'react';
import styled from '@emotion/styled';

import { Column, Row } from '../../Flex';

const Prompt = styled('span')`
  color: #fefefe;
  font-weight: 800;
`;

const PromptValue = styled('span')`
  color: #60ff70;
  font-weight: 200;
  padding-left: 6px;
`;

const PromptOutput = styled('span')`
  color: #7e7e7e;
`;

const Copyright = () => (
  <Column
    height={101}
    p={32}
    borderTop="#1e1e1e solid 1px"
    whiteSpace="nowrap"
    letterSpacing="0.4px"
  >
    <Row mb={1}>
      <Prompt>$ figs@mblocal ></Prompt>
      <PromptValue>copyright</PromptValue>
    </Row>
    <PromptOutput>Joey Figaro © 2019, All Rights Reserved</PromptOutput>
  </Column>
);

export default Copyright;
