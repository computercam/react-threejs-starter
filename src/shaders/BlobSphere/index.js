import glsl from 'glslify';
import raw from 'raw.macro';
const _fragmentShader = raw('./fragment.glsl');
const _vertexShader = raw('./vertex.glsl');

const fragmentShader = glsl`${_fragmentShader}`;
const vertexShader = glsl`${_vertexShader}`;
const uniforms = {
  tCube: { value: 0 },
  uColorFactor: { value: 0 },
  mRefractionRatio: { value: 1.02 },
  mFresnelBias: { value: 0.1 },
  mFresnelScale: { value: 4.0 },
  mFresnelPower: { value: 2.0 },
}

const shader = {
  fragmentShader,
  vertexShader,
  uniforms
}

export default shader;