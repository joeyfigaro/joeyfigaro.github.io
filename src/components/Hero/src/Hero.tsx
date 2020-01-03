import React from 'react';
import styled from '@emotion/styled';
import { space, typography, TypographyProps } from 'styled-system';

import Button from '../../Button';
import { Row } from '../../Flex';

const HeroHeading = styled.h1<TypographyProps>`
  ${typography}
  letter-spacing: 1%;
`;

const Hero = () => (
  <Row width={[3 / 4]} m="auto" whiteSpace="nowrap">
    <HeroHeading fontSize={[24, 32, 56]} lineHeight={['32px', '44px', '68px']}>
      I build engaging interfaces,
      <br /> applications, & experiences
    </HeroHeading>
    <Row justify="flex-start" mt={[32, 32, 48]}>
      <Button mr={16}>Download Resume</Button>
      <Button>Hire Me</Button>
    </Row>
  </Row>
);

export default Hero;
