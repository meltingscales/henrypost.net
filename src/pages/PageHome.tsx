import React from 'react';
import {Alert, Container} from "react-bootstrap";
import {HENRY_ORIGINAL_WEBSITE_URL, OWNER_NAME} from "../Config";

const PageHome = () => {
    // noinspection HttpUrlsUsage
    return <>
        <h1>{OWNER_NAME}</h1>
        <Container>
            <p>Hello, welcome to {OWNER_NAME}'s website.</p>
            <p>I am learning ReactJS, which this website is written in.</p>
            <Alert variant={'danger'}>
                <a href={HENRY_ORIGINAL_WEBSITE_URL}>
                    <h2>This is an extremely in-development website. <br/><br/>
                        If you are not expecting this, please click here to be taken to my primary website.</h2>
                </a>
            </Alert>
        </Container>
    </>;
}

export default PageHome;
