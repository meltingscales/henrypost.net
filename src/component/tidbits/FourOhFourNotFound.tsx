import React from "react";
import {Container} from "react-bootstrap";

export class FourOhFourNotFound extends React.Component {
    render() {
        return <>
            <Container>
                <h1>404 - page not found</h1>
                <aside>
                    <a href={'/'}>
                        <h2>
                            Click me to go to the homepage!
                        </h2>
                    </a>
                </aside>
            </Container>
        </>;
    }
}