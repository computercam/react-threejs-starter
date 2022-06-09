import SphereMaterial from "../materials/SphereMaterial"

export default function Sphere () {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <SphereMaterial />
    </mesh>
  )
}