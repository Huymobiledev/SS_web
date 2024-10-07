import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./loader";

// Hook để kiểm tra kích thước màn hình
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};

// Earth
const Game = ({ scale }: { scale: number }) => {
    const earth = useGLTF("./game/scene.gltf");

    return (
        <primitive object={earth.scene} scale={scale} position-y={0} rotation-y={0} />
    );
};

const GameCanvas = () => {
    const { width } = useWindowSize();
    const scale = width <= 768 ? 12 : 15; 

    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 45, near: 0.2, far: 200, position: [-4, 3, 6] }}
        >
            <ambientLight intensity={1} />
            <directionalLight position={[20, 20, 20]} intensity={10} />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={0}
                />
                <Game scale={scale} />
            </Suspense>
        </Canvas>
    );
};

export default GameCanvas;
