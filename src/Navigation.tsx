import React from "react";
import {Link} from "react-router-dom";

import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Config} from "./Config";
import {TextFmtService} from "./service/ServiceTextFmt";

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

const NavDropdownItem = (props: { path: string, subpath: string }) => {

    const href = TextFmtService.absDirsFmt(props.path, props.subpath);
    const innerText = TextFmtService.dirFmt(props.subpath);

    return (
        <NavDropdown.Item
            href={href}>
            {innerText}
        </NavDropdown.Item>
    )
}

const Navigation = () =>
    (
        <>
            <Navbar bg={'light'} expand={'sm'}>
                <Container>
                    <Navbar.Brand href={"/"}>
                        <img
                            src={'/hp.svg'}
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

                            <NavDropdown
                                title={TextFmtService.homeDirFmt('work')}
                                id={'basic-nav-dropdown'}>

                                <NavDropdownItem
                                    path={'work'}
                                    subpath={'resume'}/>

                                <NavDropdownItem
                                    path={'work'}
                                    subpath={'certifications'}/>

                            </NavDropdown>

                            {/*<NavigationItem href={"/resume"}*/}
                            {/*                name={"resume"}/>*/}

                            <NavigationItem href={"/contact"}
                                            name={"contact"}/>

                            <NavigationItem href={"/about"}
                                            name={"about"}/>

                            <NavigationItem href={"/blog"}
                                            name={"blog"}/>

                            <NavDropdown
                                title={TextFmtService.homeDirFmt('demoApps')}
                                id={'basic-nav-dropdown'}>

                                <NavDropdownItem
                                    path={'demoApps'}
                                    subpath={'githubApp'}/>

                                <NavDropdownItem
                                    path={'demoApps'}
                                    subpath={'cube'}/>

                            </NavDropdown>


                            <NavDropdown
                                title={TextFmtService.homeDirFmt('hobbies')}
                                id={'basic-nav-dropdown'}>

                                <NavDropdownItem
                                    path={'hobbies'}
                                    subpath={'books'}/>

                                <NavDropdownItem
                                    path={'hobbies'}
                                    subpath={'music'}/>

                                <NavDropdownItem
                                    path={'hobbies'}
                                    subpath={'videogames'}/>

                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

export default Navigation