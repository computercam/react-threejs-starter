import glsl from 'glslify';
import raw from 'raw.macro';
const _fragmentShader = raw('./fragment.glsl');
const _vertexShader = raw('./vertex.glsl');

const fragmentShader = glsl`${_fragmentShader}`;
const vertexShader = glsl`${_vertexShader}`;
const uniforms = {
  uTime: { value: 0 },
  uColor1: { value: [255 / 255, 255 / 255, 229 / 255] },
  uColor2: { value: [255 / 255, 113 / 255, 66 / 255] },
  uColorAccent: { value: [61 / 255, 66 / 255, 148 / 255] },
};

const shader = {
  uniforms,
  fragmentShader,
  vertexShader
};

export default shader;