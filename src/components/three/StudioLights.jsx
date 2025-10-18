import React from 'react'
import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name='lights'>
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        position={[-10, 5, -5]}
                        intensity={10}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        position={[-10, 0, 1]}
                        intensity={10}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight intensity={Math.PI * 2} angle={0.15} decay={0} position={[-2, 10, 5]}/>
            <spotLight intensity={Math.PI * 2} angle={0.15} decay={0} position={[-0, -25, 10]}/>
            <spotLight intensity={Math.PI * 3} angle={0.15} decay={0.1} position={[0, 15, 5]}/>
        </group>
    )
}
export default StudioLights
