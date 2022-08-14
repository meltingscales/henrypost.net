import React from 'react';
import {Alert, Container} from "react-bootstrap";
import {OWNER_NAME} from "../Config";

const Home = () => {
    // noinspection HttpUrlsUsage
    return <>
        <h1>{OWNER_NAME}</h1>
        <Container>
            <p>Hello, welcome to {OWNER_NAME}'s website.</p>
            <p>I am learning ReactJS :3c</p>
            <Alert variant={'danger'}>
                <a href={'http://henrypost.net'}>
                    <h2>This is an extremely in-development website. <br/><br/>
                        If you are not expecting this, please click here to be taken to my primary website.</h2>
                </a>
            </Alert>
        </Container>
    </>;
}

export default Home;
