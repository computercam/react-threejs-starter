import { useRef } from 'react';
import SphereMaterial from "../materials/SphereMaterial";

export default function Sphere ({ 
  scale = 10
}) {
  const sphere = useRef()
  return (
    <mesh scale={scale} ref={sphere}>
      <sphereBufferGeometry args={[1, 32, 32]}/>
      <SphereMaterial />
    </mesh>
  )
}