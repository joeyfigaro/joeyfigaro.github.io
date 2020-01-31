import React, { memo, useRef, useEffect } from 'react';
import * as THREE from 'three/src/Three';
import { useThree, useFrame, useRender, extend } from 'react-three-fiber';
// import { a } from 'react-spring/three';

import EffectComposer from './postprocessing/EffectComposer';
import RenderPass from './postprocessing/RenderPass';
import GlitchPass from './postprocessing/GlitchPass';

extend({ EffectComposer, RenderPass, GlitchPass });

const Effects = memo(({ factor }: any) => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();

  useEffect(() => {
    composer.current.setSize(size.width, size.height), [size];
  });
  useRender(() => {
    composer.current.render();
  }, true);
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <glitchPass attachArray="passes" renderToScreen factor={factor} />
    </effectComposer>
  );
});

export default Effects;
