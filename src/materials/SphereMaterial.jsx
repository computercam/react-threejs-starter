import raw from 'raw.macro';
import { BackSide } from "three";
const fragmentShader = raw('../shaders/sphere/fragment.glsl');
const vertexShader = raw('../shaders/sphere/vertex.glsl');


export default function SphereMaterial({ 
  colors = [
    [255 / 255, 255 / 255, 229 / 255],
    [255 / 255, 113 / 255, 66 / 255],
    [61 / 255, 66 / 255, 148 / 255]
  ]
}) {
  console.log(fragmentShader)
  console.log(vertexShader)
  return (
    <shaderMaterial 
      side={BackSide}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={{
        uTime: { value: 0 },
        uColor1: { value: colors[0] },
        uColor2: { value: colors[1] },
        uColorAccent: { value: colors[2] },
      }}
      wireframe={false}
    />
  )
}
  