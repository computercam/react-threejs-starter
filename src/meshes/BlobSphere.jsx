import { useRef } from 'react';
import BlobSphereMaterial from "../materials/BlobSphereMaterial";


export default function BlobSphere ({ 
  scale = 2
}) {
  const sphere = useRef()
  return ( 
    <mesh scale={scale} ref={sphere}>
      <sphereBufferGeometry args={[1, 64, 64]}/>
      <BlobSphereMaterial/>
    </mesh>
  )
}
