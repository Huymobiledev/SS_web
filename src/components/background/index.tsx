import { Stack } from "@mui/system";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useState } from "react";
import type { Points as PointsType } from "three";

// Stars
const Stars = (props: PointsProps) => {
    const ref = useRef<PointsType | null>(null);
    // For each star
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(10000), { radius: 1 }),
    );

    // Rotate multiple stars
    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* Points */}
            <Points
                ref={ref}
                positions={new Float32Array(sphere)}
                stride={3}
                frustumCulled
                {...props}
            >
                {/* Each point material */}
                <PointMaterial
                    transparent
                    color="white"
                    size={0.002}
                    sizeAttentuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Stars Canvas
const StarsCanvas = ({ children }: { children?: any }) => {
    return (
        <Stack sx={{
            width: "100vw",
            height: {
                xl: "290vh",
                md: "380vh",
                xs: "350vh"
            },
            alignItems: "center",
            position: "relative"
        }}>
            <Stack sx={{
                width: "100vw",
                height: {
                    xl: "290vh",
                    md: "380vh",
                    xs: "380vh"
                },
            }}>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                    <Preload all />
                </Canvas>
            </Stack>
            <Stack sx={{
                width: "100vw",
                height: {
                    xl: "290vh",
                    md: "380vh",
                    xs: "380vh"
                },
                position: "absolute",
                pt: 10
            }}>
                {children}
            </Stack>
        </Stack>
    );
};

export default StarsCanvas;
