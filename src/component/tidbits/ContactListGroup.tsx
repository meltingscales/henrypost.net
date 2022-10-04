import {ListGroup} from "react-bootstrap";
import ListGroupItemLink from "./ListGroupItemLink";
import {Github, Laptop, Mailbox, Person, Tree} from "react-bootstrap-icons";
import React from "react";

function ContactListGroup() {
    const ICON_SIZE = '30'
    return <>
        <ListGroup>
            <ListGroup.Item variant={"info"}>Quick links:</ListGroup.Item>
            <ListGroupItemLink
                link={'https://www.linkedin.com/in/henryfbp/'}
                text={<><Person size={ICON_SIZE}/>LinkedIn</>}/>
            <ListGroupItemLink
                link={'https://linktr.ee/henryfbp'}
                text={<><Tree size={ICON_SIZE}/> Linktree</>}/>
            <ListGroupItemLink
                link={'mailto:resplendent.falconeer@gmail.com'}
                text={<><Mailbox size={ICON_SIZE}/> Email</>}/>
            <ListGroupItemLink
                link={'https://github.com/HenryFBP'}
                text={<><Github size={ICON_SIZE}/> Github</>}/>
            <ListGroupItemLink
                link={'https://github.com/HenryFBP/dotfiles/'}
                text={<><Laptop size={ICON_SIZE}/> Dotfiles (Got a new laptop?)</>}/>
        </ListGroup>
    </>;
}

export default ContactListGroup