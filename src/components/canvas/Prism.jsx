import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Prism = ({ isMobile }) => {
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
        scale={ isMobile ? 0.2 : 0.35}
        position={isMobile ? [0, -3, -2.2] : [-0.6, 1.6, 6.3]}
        rotation={rotation}
      />
    </mesh>
  )
}

const PrismCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Prism isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default PrismCanvas