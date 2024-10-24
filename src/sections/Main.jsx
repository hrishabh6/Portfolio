import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom'; // Default import
import CanvasLoader from '../components/CanvasLoader';
import { PerspectiveCamera } from '@react-three/drei'; // Correct import
import { useMediaQuery } from 'react-responsive';
import { Leva, useControls } from 'leva';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import Camera from '../components/Camera';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';


const Main = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

    const calculateSizes = (isSmall, isMobile, isTablet) => {
        return {
            deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
            deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.5, 0],
            cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
            reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
            ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
            targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
        };
    };

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <>
            {/* 3D Model Section */}
            <section className="min-h-screen flex flex-col relative m-3">
                {/* Text and Intro Section */}
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
                    <p className="text-white text-center text-xl sm:text-3xl font-medium font-generalsans">
                        Hi! I am Hrishabh Joshi <span className="waving-hand">&#128075;</span>
                    </p>
                    <p className="hero_tag text-gray_gradient">
                        Building scalable and efficient Backend Systems
                    </p>
                </div>

                {/* 3D Canvas Section */}
                <div className="w-full h-full absolute inset-0 z-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <Camera isMobile={isMobile}>
                                <HackerRoom
                                    rotation={[0.10, -3.0, 0.00]}
                                    position={sizes.deskPosition}
                                    scale={sizes.deskScale}
                                />
                            </Camera>
                            <group>
                                <Target position={sizes.targetPosition} rotation={[0, Math.PI / 5, 0.00]} />
                                <ReactLogo position={sizes.reactLogoPosition} />
                                <Cube position={sizes.cubePosition} />
                                <Rings position={sizes.ringPosition} />
                            </group>
                            <ambientLight intensity={1} />
                            <directionalLight intensity={0.5} position={[10, 10, 10]} />
                        </Suspense>
                    </Canvas>
                </div>
            </section>

            <div className="my-4 w-full flex justify-center">
                <NavLink className="w-fit" to="#contact">
                    <Button name="Let's Connect" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </NavLink>
            </div>


        </>
    );

}

export default Main;
