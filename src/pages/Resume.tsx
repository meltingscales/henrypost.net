import {OWNER_NAME} from "../Config";
import {Container} from "react-bootstrap";
import React from "react";
import {MResume} from "../model/MResume";


const Resume = () => {
    return <>
        <h1>Resume</h1>
        <Container>
            <p>todo resumes</p>

            {new MResume(MResume.henryResumeData()).renderResume()}
        </Container>
    </>;
}

export default Resume;
