import React from 'react';
import styled from '@emotion/styled';

const CopyrightContainer = styled('div')`
  width: 100%;
  height: 101px;
  padding: 32px;
  border-top: #1e1e1e solid 1px;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3px;
`;

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
  <CopyrightContainer>
    <Row>
      <Prompt>$ figs@mblocal ></Prompt>
      <PromptValue>copyright</PromptValue>
    </Row>
    <PromptOutput>Joey Figaro © 2019, All Rights Reserved</PromptOutput>
  </CopyrightContainer>
);

export default Copyright;
