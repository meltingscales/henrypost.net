import {Card} from "react-bootstrap";
import {HENRY_ORIGINAL_WEBSITE_URL} from "../Config";

const PageContact = () => {
    return <>
        <h1>Contact</h1>
        <Card>
            <Card.Header>
                Please visit <a href={HENRY_ORIGINAL_WEBSITE_URL}>{HENRY_ORIGINAL_WEBSITE_URL}</a>
            </Card.Header>
        </Card>
    </>;
}

export default PageContact

