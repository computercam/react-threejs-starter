import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BackSide } from "three";
import SphereShader from "../shaders/Sphere";

const  {
  fragmentShader,
  uniforms,
  vertexShader
} = SphereShader

export default function SphereMaterial() {
  const material = useRef()

  useFrame(({ clock }) => {
    material
      .current
      .uniforms
      .uTime
      .value = clock.getElapsedTime() * 0.6
  })
  
  return (
    <shaderMaterial
      ref={material}
      side={BackSide}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  )
}