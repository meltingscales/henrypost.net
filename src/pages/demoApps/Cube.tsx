import {Container} from "react-bootstrap";

import React, {useRef, useState} from 'react'
// import {Canvas, useFrame} from '@react-three/fiber'


// //https://github.com/pmndrs/react-three-fiber
// function NotABoxREEEE(props) {
//     // This reference gives us direct access to the THREE.Mesh object
//     const ref = useRef()
//     // Hold state for hovered and clicked events
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     // @ts-ignore
//     useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//     // Return the view, these are regular Threejs elements expressed in JSX
//     return (
//         <mesh
//             component={'div'}
//             {...props}
//             ref={ref}
//             scale={clicked ? 1.5 : 1}
//             onClick={(event) => click(!clicked)}
//             onPointerOver={(event) => hover(true)}
//             onPointerOut={(event) => hover(false)}>
//             <boxGeometry args={[1, 1, 1]}/>
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
//         </mesh>
//     )
// }


export const Cube = (props: any) => {

    return <Container>
        <h2>its a cube bro</h2>

        <Container>
            {/*<Canvas>*/}
            {/*    <ambientLight/>*/}
            {/*    <pointLight position={[10, 10, 10]}/>*/}
            {/*    <NotABoxREEEE component={'div'} position={[-1.2, 0, 0]}/>*/}
            {/*    <NotABoxREEEE component={'div'} position={[1.2, 0, 0]}/>*/}
            {/*</Canvas>,*/}


            weooooweoooo wreeeooooo (sound of cube roatation)


            <pre><code>
            |---|<br/>
            |   |<br/>
            |   |<br/>
            |---|</code>
    </pre>
        </Container>

    </Container>

}