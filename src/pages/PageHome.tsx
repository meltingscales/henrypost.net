import React from 'react';
import {Alert, Container} from "react-bootstrap";
import {HENRY_ORIGINAL_WEBSITE_URL, OWNER_NAME} from "../Config";

const PageHome = () => {
    // noinspection HttpUrlsUsage
    return <Container>

        <Container>
            <h1>{OWNER_NAME}</h1>
            <h2>Senior Security Engineer, U.S. Bank</h2>
            <img style={{width: '20vw'}}
                 src={require('../img/headshot.png')}
                 alt={'Henry Post smiling, wearing a bright orange shirt, standing in front of the sea near Hawaii.'}/>
            <ul>
                <li><a href={'mailto:resplendent.falconeer@gmail.com'}>Email</a></li>
                <li><a href={'https://github.com/HenryFBP'}>GitHub</a></li>
                <li><a href={'https://github.com/HenryFBP/dotfiles/'}>Dotfiles (New laptop?)</a></li>
            </ul>
        </Container>

        <Container>
            <Alert variant={"info"}>
                <i>
                    Opinions expressed are solely my own and do not express the views or opinions of my employer.
                </i>
            </Alert>
        </Container>

        <Container>
            <p>Hello, welcome to {OWNER_NAME}'s website.</p>
            <p>I am learning ReactJS, which this website is written in.</p>
            <p>This is intended to replace <a href={'https://henryfbp.github.io/'}>my old website</a>, which has grown
                very large and is somewhat hard to customize
                as it was built with Hugo, a static Markdown to HTML templating tool.</p>
            <Alert variant={'danger'}>
                <a href={HENRY_ORIGINAL_WEBSITE_URL}>
                    <h2>This is an extremely in-development website. <br/><br/>
                        If you are not expecting this, please click here to be taken to my primary website.</h2>
                </a>
            </Alert>
        </Container>

        <Container>
            <h1>Self Introduction</h1>
            <p>I’m a Senior Security Engineer at U.S. Bank, Illinois Institute of Technology alumni, and used to work as
                a private tutor for Python, Java, and web development.
            </p>

            <p> Working full time at U.S. Bank currently and doing a master’s program at NYU, so I will not be updating
                this site very much.
            </p>
            <p>
                In my free time I like to bake, go cycling, play video games, and scuba dive (if I have enough time).
            </p>
            <p>
                Check out my GitHub for code that I make, and message me if you’d like to get tutored on something or
                have any questions.
            </p>


    </Container>
</Container>
    ;
}

export default PageHome;
