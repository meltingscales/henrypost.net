import {Col, Container, Row} from "react-bootstrap";
import {ReactNode, useEffect, useState} from "react";
import {GithubService} from "../../service/GithubService";
import GithubHealthAlert from "../../component/GithubHealthAlert";
import GithubProfileApplet from "../../component/GithubProfileApplet";
import {Config} from "../../Config";
import PrettyJSON from "../../component/PrettyJSON";

function GithubBlogFile(file: any) {

    console.log("We got passed:")
    console.log(file)

    return <>
        <Container>
            <p>{file.name}</p>
            <aside>
                <a href={file.download_url}>Download</a>
            </aside>
        </Container>
    </>
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

            {fileList}

            <PrettyJSON name={GithubBlogFiles.name} data={repoContents}/>

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
                path={'content/posts'}
            />

        </Container>
    </>;
}

export default GithubApp

