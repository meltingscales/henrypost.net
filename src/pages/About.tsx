import React from 'react';
import {Container} from "react-bootstrap";
import {Config} from "../Config";

function About() {
    return <>
        <h1>About Website</h1>
        <Container>
            <p>
                Made with ReactJS and deployed with Google Cloud Platform.
            </p>
            <a href={Config.SITE_CODE_URL}>
                Please click this link for this website's source code.</a>
        </Container>
    </>;
}

export default About
