import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { OrbitControls, Preload, Stats, TransformControls } from "@react-three/drei";
import Controller from '@/components/Controller'

const Controls = () => {
  const control = useRef(null);
  return <OrbitControls 
  ref={control} 
  enableZoom={false} 
  enablePan={false} 
  maxAzimuthAngle={Math.PI / 4}
  maxPolarAngle={Math.PI}
  minAzimuthAngle={-Math.PI / 4}
  minPolarAngle={0}/>;
};
const CanvasWrapper = ({ children }) => {
  return (
    <>
      <Canvas
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        mode="concurrent"
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        {/* <Stats /> */}
        
        <Controls />
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
};

export default CanvasWrapper;
