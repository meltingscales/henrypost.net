import {Button, Col, Container, Row} from "react-bootstrap";
import React, {ReactNode, useEffect, useState} from "react";
import {GithubService} from "../../service/GithubService";
import GithubHealthAlert from "../../component/GithubHealthAlert";
import GithubProfileApplet from "../../component/GithubProfileApplet";
import {Config} from "../../Config";
import PrettyJSON from "../../component/PrettyJSON";
import {TextFmtService} from "../../service/TextFmtService";
import {MarkdownFmtService} from "../../service/MarkdownFmtService";
import ReactMarkdown from "react-markdown";

// import _ from "lodash"

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

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

    loadFileContent = () => {
        if (this.state.fileContents !== undefined) {
            console.log("Already loaded file content for " + this.state.fileResponse.name)
            return
        }

        console.log("Loading file " + this.state.fileResponse.name + ", please wait...")

        this.setState({
            shown: this.state.shown,
            fileResponse: this.state.fileResponse,
            fileContents: 'Loading, please wait!'
        }, async () => {

            //fetch file content
            const fileResponse = await GithubService.fetchGithubFile(this.state.fileResponse.git_url)
            const fileContent = atob(fileResponse.content)//TODO what do i use if not `atob`? :|

            console.log("File content:")
            console.log(fileContent)

            const splitFileContent = MarkdownFmtService.splitHugoBlogPost(fileContent)

            console.log("Split file content:")
            console.log(splitFileContent)

            //update only fileContents
            this.setState({
                shown: this.state.shown,
                fileResponse: this.state.fileResponse,
                fileContents: splitFileContent[1]
            })

            // this.setState({
            //     fileContents: 'dummy file content',
            //     ..._.pick(this.state, ['shown', 'fileResponse'])
            // })
        })


    }

    toggleBlogPostVisible = () => {

        if (this.state.shown) {
            console.log(`we should hide this blog post (file "${this.state.fileResponse.name}")...`)
        } else {
            console.log(`we should show you the file "${this.state.fileResponse.name}"`)
        }

        this.setState({
            shown: (!this.state.shown),
            fileResponse: this.state.fileResponse,
            fileContents: this.state.fileContents
        }, () => {
            //this HAS to be inside this block - setState is asynchronous!
            // If we don't put this here, we won't be using the updated state.fileContent, and it'll get clobbered.
            if (this.state.shown) {
                this.loadFileContent()
            }
        })
    }

    render() {

        // console.log("We got passed:")
        // console.log(this.props)

        var visibleButtonText = '[+] Expand blog post'
        var blogContent = '...'
        if (this.state.shown) {
            visibleButtonText = '[-] Hide blog post'

            if (this.state.fileContents === undefined) {
                blogContent = "Uh oh! fileContents is `undefined`!"
            } else {
                blogContent = this.state.fileContents
            }

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
                <Container>
                    <ReactMarkdown>
                        {blogContent}
                    </ReactMarkdown>
                </Container>
            </Container>
        </>
    }
}

function GithubMarkdownFiles(props: any) {

    const [repoContents, setRepoContents] = useState<Array<any>>([]);

    useEffect(() => {

        const fetchFileList = async () => {
            const fileList = await GithubService.fetchGithubRepoContents(
                props.username, props.repo, props.path
            )

            const fileListJSON = await fileList.json()

            setRepoContents(fileListJSON)
        }

        fetchFileList()

    }, [props])


    var fileList: Array<ReactNode> = [];

    for (var idx in repoContents) {
        var file = repoContents[idx]
        fileList.push(
            <Container key={idx}>
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
                name={GithubMarkdownFiles.name}
                data={repoContents}
            />

        </Container>
    </>
}

class GithubApp extends React.Component {
    render() {
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
                <h2>Github Markdown Files</h2>

                <GithubMarkdownFiles
                    username={'henryfbp'}
                    repo={'henryfbp.github.io'}
                    branch={'master'}
                    path={'content/posts'}
                />

            </Container>
        </>;
    }
}

export default GithubApp

