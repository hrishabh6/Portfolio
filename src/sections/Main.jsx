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
            <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Hrishabh Joshi <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Efficient Websites
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <Camera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </Camera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>


        </>
    );

}

export default Main;
