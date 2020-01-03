import React from 'react';
import styled from '@emotion/styled';
import { space, typography, TypographyProps } from 'styled-system';

import Button from '../../Button';
import Intro from '../../Intro';
import { Row } from '../../Flex';

const HeroHeading = styled.h1<TypographyProps>`
  ${typography}
  letter-spacing: 1%;
`;

const StarfieldWrapper = styled.div`
  position: absolute;
  height: 768px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`

const Hero = () => (
  <Row width={[3 / 4]} m="auto" whiteSpace="nowrap">
    <ContentWrapper>
      <HeroHeading fontSize={[24, 32, 56]} lineHeight={['32px', '44px', '68px']}>
        I build engaging interfaces,
        <br /> applications, & experiences
      </HeroHeading>
      <Row justify="flex-start" mt={[32, 32, 48]}>
        <Button mr={16}>Download Resume</Button>
        <Button>Hire Me</Button>
      </Row>
    </ContentWrapper>
    <StarfieldWrapper>
      <Intro />
    </StarfieldWrapper>
  </Row>
);

export default Hero;
