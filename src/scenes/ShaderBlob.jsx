import CameraControls from '../controls/CameraControls';
import NoiseScreen from '../effects/NoiseScreen';
import BlobSphere from '../meshes/BlobSphere';
import Sphere from '../meshes/Sphere';

export default function ShaderBlob() {
  return (
    <>
      <CameraControls />
      <Sphere />
      <BlobSphere />
      <NoiseScreen />
    </>
  )
}