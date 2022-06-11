// https://github.com/pmndrs/react-three-fiber/discussions/389
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import noiseScreen from '../shaders/NoiseScreen';

export default function NoiseScreen() {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => 
    new EffectComposer(gl), [gl])
    
  const renderPass = useMemo(() => 
    new RenderPass(scene, camera), [scene, camera])
  
  const shaderPass = useMemo(() => 
    new ShaderPass(noiseScreen), [])

  useEffect(() => {
    composer.setSize(size.width, size.height)
    composer.addPass(renderPass)
    composer.addPass(shaderPass)
  }, [composer, renderPass, shaderPass, size])

  return useFrame(() => composer.render(), 1)
}