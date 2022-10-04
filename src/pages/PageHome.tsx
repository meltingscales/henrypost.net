import React from 'react';
import {Alert, Card, Col, Container, Row} from "react-bootstrap";
import {OWNER_NAME} from "../Config";
import ContactListGroup from "../component/tidbits/ContactListGroup";


const HenryProfileCard = () => {
    return <Card
        // style={{width: '30vw'}}
    >
        <Card.Img
            src={'/staticfiles/headshot.png'}
            alt={'Henry Post smiling, wearing a bright orange shirt, standing in front of the sea near Hawaii.'}
        />
        <Card.Body>
            <Card.Title>
                <h1>{OWNER_NAME}</h1>
                <h2>Senior Security Engineer</h2>
                <h3>U.S. Bank</h3>
            </Card.Title>
            <Card.Text>
                <ContactListGroup/>
            </Card.Text>
        </Card.Body>
    </Card>
}

const ICON_SIZE = '30'

const PageHome = () => {
    return <Container>

        <Container>

            <Row>
                <Col>
                    <HenryProfileCard/>
                </Col>
                <Col>
                    <Container>
                        <h1>Self Introduction</h1>
                        <p>I’m a Senior Security Engineer at U.S. Bank, Illinois Institute of Technology alumni, and
                            used to work as
                            a private tutor for Python, Java, and web development.
                        </p>

                        <p> Working full time at U.S. Bank currently and doing a master’s program at NYU, so I will not
                            be updating
                            this site very much.
                        </p>
                        <p>
                            In my free time I like to bake, go cycling, play video games, and scuba dive (if I have
                            enough time).
                        </p>
                        <p>
                            <a href={'https://github.com/HenryFBP/'}>Check out my GitHub</a> for code that I make, and
                            message me if
                            you’d like to get tutored on something or
                            have any questions.
                        </p>
                    </Container>

                    <Container>
                        <Alert variant={"info"}>
                            <i>
                                Opinions expressed are solely my own and do not express the views or opinions of my employer.
                            </i>
                        </Alert>
                    </Container>

                    {/*<Container>*/}
                    {/*    <Alert>*/}

                    {/*        <p>Hello, welcome to {OWNER_NAME}'s website.</p>*/}
                    {/*        <p>I am learning ReactJS, which this website is written in.</p>*/}
                    {/*        <p>This is intended to replace <a href={HENRY_OLD_GH_SITE_URL}>my old website</a>, which has*/}
                    {/*            grown very large and is somewhat hard to customize*/}
                    {/*            as it was built with Hugo, a static Markdown to HTML templating tool.</p>*/}
                    {/*    </Alert>*/}
                    {/*    <Alert variant={'danger'}>*/}
                    {/*        <a href={HENRY_OLD_GH_SITE_URL}>*/}
                    {/*            <h3>Note: This is an extremely in-development website. <br/><br/>*/}
                    {/*                If you are not expecting this, please click here to be taken to my old website.</h3>*/}
                    {/*        </a>*/}
                    {/*    </Alert>*/}
                    {/*</Container>*/}

                </Col>
            </Row>

        </Container>

        <hr/>


        {/*<Container>*/}
        {/*    <script src="https://unpkg.com/github-card@1.2.1/dist/widget.js"></script>*/}
        {/*    <div className="github-widget" data-username="henryfbp"></div>*/}
        {/*</Container>*/}

        <Container>
            <p>

                For more cool content, see <a
                href={'https://github.com/HenryFBP/NYU-CS-GY-6813/blob/master/paper/final/Henry%20Post%20-%20NYU-CS-GY-6813%20-%20A%20survey%20on%20automated%20software%20vulnerability%20discovery%2C%20exploitation%2C%20and%20patching%20-%20Combined%20Paper.pdf'}>my
                paper for NYU regarding "Automated software vulnerability discovery, exploitation, and patching"</a> and
                related work (<a href={'https://github.com/HenryFBP/NYU-CS-GY-6813'}>extra 1</a>, <a
                href={'https://github.com/HenryFBP/NYU-CS-GY-6813-research-paper-work'}>extra
                2</a>, <a
                href={'https://github.com/HenryFBP/NYU-CS-GY-6813/blob/master/paper/final/Henry%20Post%20-%20NYU-CS-GY-6813%20-%20A%20survey%20on%20automated%20software%20vulnerability%20discovery%2C%20exploitation%2C%20and%20patching%20-%20Presentation.pdf'}>powerpoint</a>)
            </p>

            <p>
                Use <a href={'https://www.libreoffice.org/'}>LibreOffice</a> or MS Word to read my paper.
            </p>
            <p>

                The video presentation is below.
            </p>

            <iframe width="100%" height="315" src="https://www.youtube.com/embed/BgICl-5bqbQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}></iframe>

        </Container>

    </Container>;
}

export default PageHome;
