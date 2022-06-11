import { Canvas } from '@react-three/fiber';
import './App.css';
import ShaderBlob from './scenes/ShaderBlob';


function App() {
  return (
    <div className="App">
      <Canvas 
        camera={{ fov: 55, near: 0.1, far: 1000, position: [5, 2, 5] }} 
        onCreated={(state) => {
          state.gl.shadowMap.enabled = true
          state.gl.setClearColor('rgb(205, 205, 205)')
        }}
      >
        <ShaderBlob />
      </Canvas>
    </div>
  );
}

export default App;
