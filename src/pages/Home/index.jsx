import React, {Suspense} from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ParticlesCont from "../../components/Particles";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Home() {
    
    return (
        <div className="body-page-home">
            <div className="absolute z-10 w-full h-full">
                {/* <Banner /> */}
                <Header />
            </div>
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1.4} />
                    <directionalLight position={[1, 2, 3]} />
                    <Sphere args={[1, 200, 100]} scale={2.4}>
                        <MeshDistortMaterial
                            color="#fff"
                            attach="material"
                            distort={0.5}
                            speed={1}
                        />
                    </Sphere>
                </Suspense>
            </Canvas>
            {/* <ParticlesCont /> */}
        </div>
    )
}