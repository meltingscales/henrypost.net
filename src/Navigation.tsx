import React from "react";
import {Link} from "react-router-dom";

import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {Config} from "./Config";
import {TextFmtService} from "./service/TextFmtService";

const NavigationItem = (props: any) => {

    var text;
    if (props.customName) {
        text = props.customName
    } else {
        text = TextFmtService.homeDirFmt(props.name)
    }

    return (
        <>
            <Link replace={true} to={props.href} className={"nav-link"}>
                {/*We need className here for Bootstrap themes*/}
                {text}
            </Link>
        </>
    )
}

const Navigation = () =>

    (
        <>
            <Navbar bg={'light'} expand={'sm'}>
                <Container>
                    <Navbar.Brand href={"/"}>/home/{Config.OWNER_NAME_NO_SPACE}</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'me-auto'}>

                            <NavigationItem href={"/"}
                                            name={"home"}/>

                            <NavigationItem href={"/blog"}
                                            name={"blog"}/>

                            <NavigationItem href={"/contact"}
                                            name={"contact"}/>

                            <NavigationItem href={"/about"}
                                            name={"about"}/>
                            
                            <Dropdown>
                                <Dropdown.Toggle id={'dropdown-basic'}>
                                    {TextFmtService.homeDirFmt('demoApps')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <NavigationItem
                                        href={"/demoApps/githubApp/"}
                                        customName={TextFmtService.dirFmt('githubApp')}/>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle>
                                    {TextFmtService.homeDirFmt('hobbies')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <NavigationItem
                                        href={'/hobbies/books/'}
                                        customName={TextFmtService.dirFmt('books')}>
                                    </NavigationItem>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

export default Navigation