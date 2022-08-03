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

const SubNavigationItem = (props: { subpath: string, path: string }) => {
    return (
        <NavigationItem
            href={TextFmtService.absDirs(props.path, props.subpath)}
            customName={TextFmtService.dirFmt(props.subpath)}/>
    )
}

const Navigation = () =>

    (
        <>
            <Navbar bg={'light'} expand={'sm'}>
                <Container>
                    <Navbar.Brand href={"/"}>
                        <img
                            src={'hp.svg'}
                            width="30"
                            height="30"
                            style={{marginRight: '1rem'}}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        {TextFmtService.homeDirAbsFmt(Config.OWNER_NAME_NO_SPACE)}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'me-auto'}>

                            <NavigationItem href={"/"}
                                            customName={"~/"}/>

                            <NavigationItem href={"/blog"}
                                            name={"blog"}/>

                            <NavigationItem href={"/contact"}
                                            name={"contact"}/>

                            <NavigationItem href={"/about"}
                                            name={"about"}/>

                            <Dropdown>
                                <Dropdown.Toggle>
                                    {TextFmtService.homeDirFmt('demoApps')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <SubNavigationItem
                                        path={'demoApps'}
                                        subpath={'githubApp'}/>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle>
                                    {TextFmtService.homeDirFmt('hobbies')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <SubNavigationItem
                                        path={'hobbies'}
                                        subpath={'books'}/>
                                    <SubNavigationItem
                                        path={'hobbies'}
                                        subpath={'music'}/>
                                    <SubNavigationItem
                                        path={'hobbies'}
                                        subpath={'videogames'}/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

export default Navigation