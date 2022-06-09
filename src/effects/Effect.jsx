// https://github.com/pmndrs/react-three-fiber/discussions/389
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import noiseScreen from '../shaders/noiseScreen';


export default function Effect({
  shaders = [noiseScreen]
}) {
  console.log(noiseScreen)
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => 
    new EffectComposer(gl), [gl])
    
  const renderPass = useMemo(() => 
    new RenderPass(scene, camera), [scene,camera])
  
  const shaderPasses = useMemo(() => 
    shaders.map(shader => 
      new ShaderPass(shader)), [shaders])

  useEffect(() => {
    composer.addPass(renderPass)

    shaderPasses.forEach(shaderPass => 
      composer.addPass(shaderPass))
      
    composer.setSize(size.width, size.height)
  }, [composer, renderPass, shaderPasses, size])

  return useFrame(() => composer.render(), 1)
}