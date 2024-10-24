import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react';

const Camera = ({ children, isMobile }) => {
    const gref = useRef();

    useFrame((state, delta) => {
        // Move the camera smoothly to a position (applies on all devices)
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        // Only apply pointer-based rotation if NOT on mobile
        if (!isMobile && gref.current) {
            const pointerX = state.pointer.x;
            const pointerY = state.pointer.y;

            // Apply rotation based on pointer movement, scaling movement
            easing.dampE(
                gref.current.rotation,
                [-pointerY / 3, -pointerX / 5, 0],
                0.25,
                delta
            );
        }
    });

    return <group ref={gref}>{children}</group>;
};

export default Camera;
