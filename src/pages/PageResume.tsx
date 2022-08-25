import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../model/MResume";
import HENRY_TRESUME_DATA from "../data/model/resume_henryPost";
// import {getThatCredlyData} from "../data/scraper/credly_scrape_henrypost";
// import {getThatCredentialDotNetData} from "../data/scrape/credential.net_scrape_henrypost";

// getThatCredentialDotNetData()
// getThatCredlyData()

const PageResume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            {new MResume(HENRY_TRESUME_DATA()).renderResume()}
        </Container>
    </>;
}

export default PageResume;
