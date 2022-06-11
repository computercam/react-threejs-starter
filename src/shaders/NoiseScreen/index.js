import glsl from 'glslify';
import raw from 'raw.macro';
import { Vector2 } from 'three';
const _fragmentShader = raw('./fragment.glsl');
const _vertexShader = raw('./vertex.glsl');

const fragmentShader = glsl`${_fragmentShader}`;
const vertexShader = glsl`${_vertexShader}`;
const uniforms = {
  tDiffuse: { value: null },
  tSize: { value: new Vector2(256, 256) },
  center: { value: new Vector2(0.5, 0.5) },
  angle: { value: 1.57 },
  scale: { value: 1.0 },
};

const shader = {
  uniforms,
  vertexShader,
  fragmentShader
};

export default shader;
