import { useSafariVersion } from "@/hooks/useSafari";
import { Stack } from "@mui/system";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, Suspense, useState, useEffect } from "react";
import type { Points as PointsType } from "three";

// Stars
const Stars = (props: PointsProps) => {
    const ref = useRef<PointsType | null>(null);
    // For each star
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(12000), { radius: 1.2 }),
    );

    // Rotate multiple stars
    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 2]}>
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
                    color="#5c5b5b"
                    size={0.0015}
                    sizeAttentuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Stars Canvas
const StarsCanvas = ({ children }: { children?: any }) => {
    const safariVersion = useSafariVersion();

    return (
        <Stack sx={{
            width: "100vw",
            height: {
                xl: "260vh",
                md: "300vh",
                xs: "320vh"
            },
            alignItems: "center",
            position: "relative"
        }}>
            {(Number(safariVersion) > 15 || Number(safariVersion) == -1)  && <Stack sx={{
                width: "100vw",
                height: {
                    xl: "260vh",
                    md: "300vh",
                    xs: "320vh"
                },
            }}>
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                    <Preload all />
                </Canvas>
            </Stack>}
            <Stack sx={{
                width: "100vw",
                height: {
                    xl: "260vh",
                    md: "300vh",
                    xs: "320vh"
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
