import { useEffect, useRef } from "react";

export default function PointLight({ 
  color = 'rgb(255, 255, 255)', 
  position = [-5, 5, -5],
  brightness = 5
}) {
  const light = useRef()
  const lightBulb = useRef()

  useEffect(() => {
    lightBulb.current.position.x = light.current.position.x
    lightBulb.current.position.y = light.current.position.y
    lightBulb.current.position.z = light.current.position.z
  }, [])

  return (
    <>
      <mesh ref={lightBulb}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <pointLight 
        ref={light} 
        args={[color, brightness]} 
        position={position} 
        castShadow={true} />
    </>
  )
}