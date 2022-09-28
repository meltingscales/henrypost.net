import {Card, Container} from "react-bootstrap";
import {HENRY_OLD_GH_SITE_URL} from "../Config";
import {BusinessCard} from "react-business-card-hfbp"

const PageContact = () => {
    return <>
        <h1>Contact</h1>
        <Card>
            <Card.Header>
                Contact is WIP, Please visit <a href={HENRY_OLD_GH_SITE_URL}>{HENRY_OLD_GH_SITE_URL}</a>
            </Card.Header>
        </Card>

        <hr/>

        <h2>Business Card</h2>
        <BusinessCard
            showPrintButton={false}
            name={'Henry Post'}
            cell={'xxx-xxx-xxxx'}
            skills={[
                'Python',
                'Java',
                'Kubernetes',
                'Helm',
                'Linux',
                'SQL',
                // 'Documentation',
                // 'Backend APIs'
            ]}
            frontBlurb={
                <img
                    src={'https://henryfbp-nodejs-site.uk.r.appspot.com/staticfiles/headshot.png'}
                    style={{
                        width: '7.5em',
                        height: '7.5em',
                        border: '5px solid darkgrey',
                    }}
                    alt={"A picture of Henry smiling"}/>
            }
            backBlurb={
                <Container>
                    <p>
                        I have an intense drive to explain, document, and teach programming and technology concepts.
                        When creating code, I strive to create reusable, clean, and well-documented code.
                        I have a wide and deep history of programming projects, all under version control and most on my
                        GitHub: <br/><br/>

                        <p style={{textAlign: "center"}}>https://github.com/HenryFBP/</p>
                    </p>
                    <p>
                        In short, I love to program, teach, and document my work; and I would say that I’m very good at
                        it.
                    </p>
                </Container>
            }
            headlines={[
                'Cybersec',
                'Automation Engineer',
                // 'Fullstack Java',
                'Helm & K8s',
                'L2 Support & DevSecOps'
            ]}
            email={'resplendent [dot] falconeer [at] gmail [dot] com'}
            location={'Chicago | Martha\'s Vineyard'}
            website={'henrypost.net'}
        />

    </>;
}

export default PageContact

