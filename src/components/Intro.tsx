import React from 'react';
import { useThree, Canvas, extend } from 'react-three-fiber';
import { a, useSpring, apply as applySpring } from 'react-spring/three';
import styled from '@emotion/styled';

import Stars from './Generative/Stars';
import Effects from './Generative/Effects';
import Text from './Generative/Text';
// import SplatterPaint from './Generative/SplatterPaint';

const IntroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

// applyThree({ EffectComposer, RenderPass, GlitchPass });

function Scene({ top, mouse }) {
  const { size } = useThree();
  const scrollMax = size.height * 4.5;

  return (
    <>
      <a.spotLight
        intensity={1.2}
        color="white"
        position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
      />
      <Effects factor={top.interpolate([0, 50], [1, 0])} />
      <Stars position={top.interpolate(top => [0, -1 + top / 20, 0])} />
      <Text
        opacity={top.interpolate([0, 200], [1, 0])}
        position={top.interpolate(top => [0, -1 + top / 200, 0])}
        fontSize={120}
      >
        figaro
      </Text>
    </>
  );
}

const Intro = () => {
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }));

  return (
    <IntroWrapper>
      <Canvas>
        <Scene top={top} mouse={mouse} />
      </Canvas>
    </IntroWrapper>
  );
};

export default Intro;
