import {Button, Col, Container, Row} from "react-bootstrap";
import React, {ReactNode, useEffect, useState} from "react";
import {GithubService} from "../../service/GithubService";
import GithubHealthAlert from "../../component/GithubHealthAlert";
import GithubProfileApplet from "../../component/GithubProfileApplet";
import {Config} from "../../Config";
import PrettyJSON from "../../component/PrettyJSON";
import {TextFmtService} from "../../service/TextFmtService";


type GithubBlogFileState = {
    shown: boolean;
    fileResponse: any;
    fileContents: any;
}


class GithubBlogFile extends React.Component<any> {

    state: GithubBlogFileState = {
        shown: false,
        fileResponse: this.props,
        fileContents: undefined
    };

    toggleBlogPostVisible = () => {

        if (this.state.shown) {
            window.alert(`we should hide this blog post...`)
        } else {
            window.alert(`we should show you the file "${this.state.fileResponse.name}"`)
        }

        this.setState(
            {
                shown: (!this.state.shown),
                fileResponse: this.state.fileResponse,
                fileContents: this.state.fileContents
            }
        )
        //TODO change state
    }

    render() {

        console.log("We got passed:")
        console.log(this.props)


        var visibleButtonText = '[+] Expand blog post'
        if (this.state.shown) {
            visibleButtonText = '[-] Hide blog post'
        }

        return <>
            <Container>
                <h3>{this.props.name}</h3>
                <aside>
                    <Button href={this.props.download_url}>Download</Button>
                    <Button href={this.props.html_url}>View on Github</Button>
                </aside>
                <Button
                    onClick={this.toggleBlogPostVisible}>
                    {visibleButtonText}
                </Button>
                <main>
                    todo, blog post content goes here.
                </main>
            </Container>
        </>
    }
}

function GithubBlogFiles(props: any) {

    const [repoContents, setRepoContents] = useState<Array<any>>([]);

    useEffect(() => {

        const fetchFileList = async () => {
            const fileList = await GithubService.fetchGithubRepoContents(
                props.username, props.repo, props.path
            )

            const fileListJSON = await fileList.json()

            console.log(fileListJSON)

            setRepoContents(fileListJSON)
        }

        fetchFileList()

    }, [props])


    var fileList: Array<ReactNode> = [];

    for (var idx in repoContents) {
        var file = repoContents[idx]
        fileList.push(
            <Container>
                <GithubBlogFile {...file}/>
                <hr/>
            </Container>
        )
    }

    return <>
        <Container>

            <a href={TextFmtService.githubFileURLfmt(props.username, props.repo, props.branch, props.path)}>
                <h3>Viewing {props.username}/{props.repo}, inside /{props.path}</h3>
            </a>

            {fileList}

            <PrettyJSON
                name={GithubBlogFiles.name}
                data={repoContents}
            />

        </Container>
    </>
}

const GithubApp = () => {

    return <>
        <h1>{GithubApp.name}</h1>

        <Container>
            <h2>Github Health Alert</h2>
            <GithubHealthAlert/>
        </Container>

        <hr/>

        <Container>
            <Row>
                <Col>
                    <h2>Github Profile Applet</h2>
                    <GithubProfileApplet
                        username={Config.OWNER_GH_USERNAME}
                    />
                </Col>
                <Col>
                    <h2>Github Repos Applet</h2>

                    TODO
                    {/*<GithubReposApplet*/}
                    {/*    username={OWNER_GH_USERNAME}*/}
                    {/*/>*/}

                </Col>
            </Row>
        </Container>

        <hr/>

        <Container>
            <h2>Github Blog Files</h2>

            <GithubBlogFiles
                username={'henryfbp'}
                repo={'henryfbp.github.io'}
                branch={'master'}
                path={'content/posts'}
            />

        </Container>
    </>;
}

export default GithubApp

