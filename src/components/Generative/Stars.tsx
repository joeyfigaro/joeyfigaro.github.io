import React, { useRef, useMemo } from 'react';
import * as THREE from 'three/src/Three';
import { useRender } from 'react-three-fiber';
import { a } from 'react-spring/three';

const Stars = ({ position }) => {
  const group = useRef();
  const group2 = useRef();
  let theta = 0;

  useRender(() => {
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.002)));
    const s = Math.cos(THREE.Math.degToRad(theta * 0.2));
    const r2 = 5 * Math.sin(THREE.Math.degToRad((theta += 0.0005)));
    const s2 = Math.cos(THREE.Math.degToRad(theta * 0.935));

    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s2, s2);
    group2.current.rotation.set(r2, r2, r2);
    group2.current.scale.set(s2, s, s);
  }, false);

  const [geo, mat, mat2, coords, coords2] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.5, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#2f2f2f'),
      transparent: true
    });
    const mat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#fefefe'),
      transparent: true
    });
    const coords = new Array(1000)
      .fill([])
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 120,
        Math.random() * 800 - 200
      ]);
    const coords2 = new Array(500)
      .fill([])
      .map(i => [
        Math.random() * 400 - 100,
        Math.random() * 1100 - 400,
        Math.random() * 900 - 400
      ]);
    return [geo, mat, mat2, coords, coords2];
  }, []);

  return (
    <>
      <a.group ref={group} position={position}>
        {coords.map(([p1, p2, p3], i) => (
          <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
      </a.group>
      <a.group ref={group2} position={position}>
        {coords2.map(([p1, p2, p3], i) => (
          <mesh
            key={i}
            geometry={geo}
            material={mat2}
            position={[p1, p2, p3]}
          />
        ))}
      </a.group>
    </>
  );
};

export default Stars;
