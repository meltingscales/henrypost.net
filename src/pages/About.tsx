import React from 'react';
import {Container} from "react-bootstrap";
import {Config} from "../Config";

function About() {
    return <>
        <h1>About Website</h1>
        <Container>
            <p>
                Made with ReactJS.
            </p>
            <a href={Config.SITE_CODE_URL}>
                See this link for project files.</a>
            <Container>
                <h2>Bio</h2>
                <p>
                    My name is Henry Post and XYZ ABC
                </p>
            </Container>
        </Container>
    </>;
}

export default About
