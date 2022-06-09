// https://stackoverflow.com/a/71727304
import raw from 'raw.macro';
import { Vector2 } from 'three';
const fragmentShader = raw('./fragment.glsl');
const vertexShader = raw('./vertex.glsl');


/**
 * Dot screen shader
 * based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

const noiseScreen = {
  uniforms: {
    tDiffuse: { value: null },
    tSize: { value: new Vector2(256, 256) },
    center: { value: new Vector2(0.5, 0.5) },
    angle: { value: 1.57 },
    scale: { value: 1.0 },
  },
  vertexShader,
  fragmentShader
};

export default noiseScreen;
