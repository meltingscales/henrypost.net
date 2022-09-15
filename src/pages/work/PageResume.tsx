import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../../model/MResume";
import HENRY_TRESUME_DATA from "../../data/modelbound/resume_henryPost";
// import {getThatCredlyData} from "../data/scraper/credly_scrape_henrypost";
// import {getThatCredentialDotNetData} from "../data/scrape/credential.net_scrape_henrypost";

// getThatCredentialDotNetData()
// getThatCredlyData()

const PageResume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            <h2>PDF Version of Resume</h2>
            <p>
                <a href={'/staticfiles/HenryPostResume.pdf'}>See below for a longer text version, or click here to download a
                    PDF version.</a>
            </p>

            <iframe title="Henry Post's Resume"
                    src="/staticfiles/HenryPostResume.pdf"
                    style={{'width': '100%', 'height': '100vh'}}
            />



        </Container>
        <Container>
            {new MResume(HENRY_TRESUME_DATA()).renderResume()}
        </Container>
    </>;
}

export default PageResume;
