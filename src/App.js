import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { DoubleSide, Euler, MathUtils } from 'three';
import './App.css';
import CameraControls from './components/CameraControls';
import Effect from './components/Effect';
import PointLight from './components/PointLight';

function App() {
  const box = React.useRef()
  
  return (
    <div className="App">
      <Canvas 
        camera={{ fov: 55, near: 0.1, far: 1000, position: [5, 2, 5] }} 
        onCreated={(state) => {
          state.gl.shadowMap.enabled = true
          state.gl.setClearColor('rgb(205, 205, 205)')
          state.camera.lookAt(box.current.position.x, box.current.position.y, box.current.position.z)
          
          box.current.position.y += box.current.geometry.parameters.height * 0.5
        }}
      >
        <PointLight />
        <CameraControls />
        
        <mesh ref={box} castShadow={true}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color={'rgb(155, 155, 155)'} />
        </mesh>
        <mesh rotation-x={MathUtils.degToRad(90)} receiveShadow={true}>
          <planeGeometry args={[5, 5]} />
          <meshPhongMaterial color={'rgb(125, 125, 125)'} side={DoubleSide}/>
        </mesh>
        <Effect />
      </Canvas>
    </div>
  );
}

export default App;
