import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from 'react';
import { CubeCamera, FrontSide, LinearMipMapLinearFilter, RGBAFormat, sRGBEncoding, WebGLCubeRenderTarget } from "three";
// import create from 'zustand';
import BlobSphereShader from "../shaders/BlobSphere";
// import getUniformsStoreMutators from "../utils/getUniformsStoreMutators";

const  {
  fragmentShader,
  uniforms: _uniforms,
  vertexShader
} = BlobSphereShader

// const useBlobSphereMaterialStore = create(set => ({
//   ..._uniforms,
//   ...getUniformsStoreMutators(_uniforms, set)
// }))

// export { useBlobSphereMaterialStore };

export default function BlobSphereMaterial() {
  const { gl, scene } = useThree()
  
  const material = useRef()
  
  const renderTarget = useMemo(() => 
    new WebGLCubeRenderTarget(256, {
      format: RGBAFormat,
      generateMipmaps: true,
      minFilter: LinearMipMapLinearFilter,
      encoding: sRGBEncoding
    })
  , [])
  
  const cubeCamera = useMemo(() => 
    new CubeCamera(0.2, 1200, renderTarget)
  , [renderTarget])
  
  useEffect(() => {
    material.current.uniforms.tCube.value = renderTarget.texture
    cubeCamera.update(gl, scene)
  }, [gl, scene, cubeCamera, material, renderTarget])
  
  useFrame(() => {
    material.current.visible = false
    cubeCamera.update(gl, scene)
    material.current.visible = true
  })

  return (
    <shaderMaterial
      ref={material}
      side={FrontSide}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={_uniforms}
    />
  )
}
