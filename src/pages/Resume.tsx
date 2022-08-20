import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../model/MResume";
import HENRY_RESUME_DATA from "../data/henryResume";
// import {getThatCredentialDotNetData} from "../data/scrape/credential.net_scrape_henrypost";

// getThatCredentialDotNetData()

const Resume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            {new MResume(HENRY_RESUME_DATA()).renderResume()}
        </Container>
    </>;
}

export default Resume;
