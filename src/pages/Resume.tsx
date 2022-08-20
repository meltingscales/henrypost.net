import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../model/MResume";
import HENRY_TRESUME_DATA from "../data/resume_henryPost";
// import {getThatCredentialDotNetData} from "../data/scrape/credential.net_scrape_henrypost";

// getThatCredentialDotNetData()

const Resume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            {new MResume(HENRY_TRESUME_DATA()).renderResume()}
        </Container>
    </>;
}

export default Resume;
