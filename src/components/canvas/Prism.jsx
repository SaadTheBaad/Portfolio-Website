import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Prism = () => {
  const prism = useGLTF("./prism_shape/scene.gltf")
  const [rotation, setRotation] = useState([0.5, 0, 0]);

  useEffect(() => {
  const interval = setInterval(() => {
  setRotation(prevRotation => [
  prevRotation[0],  
  prevRotation[1] + 0.01,        
  prevRotation[2]          
  ]);  
  }, 10);

  return () => clearInterval(interval);
  }, []);

  return (
    <mesh>
      <hemisphereLight
        intensity={1.4}
        groundColor="black"
      />
      <pointLight intensity={100} />
      <spotLight
        position={[-1, 3, 1]}
        angle={2}
        penumbra={1}
        intensity={400}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={prism.scene}
        scale={0.35}
        position={[-0.6, 1.6, 7.1]}
        rotation={rotation}
      />
    </mesh>
  )
}

const PrismCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Prism/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default PrismCanvas