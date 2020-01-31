import React from 'react';
import { FliesText } from 'react-text-fun';

const IntroAlternative = () => (
  <FliesText
    cellRadius={0.5}
    text="FIGARO"
    fontSize={170}
    cellWidth={0.015}
    speed={4}
    dodge
    dodgeY={0.15}
    dodgeSpread={0.25}
  />
);

export default IntroAlternative;
