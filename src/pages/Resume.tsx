import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../model/MResume";
// import {getThatCredentialDotNetData} from "../data/scrape/credential.net_scrape_henrypost";

// getThatCredentialDotNetData()

const Resume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            {new MResume(
                MResume.henryResumeData())
                .renderResume()}
        </Container>
    </>;
}

export default Resume;
