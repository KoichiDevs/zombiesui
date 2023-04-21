import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HeroScene from '../scene/HeroScene'
import { Loader } from '@react-three/drei'

const HeroCanvas = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <HeroScene />
                </Suspense>
            </Canvas>
            <Loader />
        </>

    )
}

export default HeroCanvas