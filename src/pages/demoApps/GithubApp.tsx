import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {GithubService} from "../../service/GithubService";
import GithubHealthAlert from "../../component/GithubHealthAlert";
import GithubProfileApplet from "../../component/GithubProfileApplet";
import {OWNER_GH_USERNAME} from "../../Config";
import PrettyJSON from "../../component/PrettyJSON";

function GithubBlogFiles(props: any) {

    const [repoContents, setRepoContents] = useState<any | null>(null);

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

    }, [])

    return <>
        <Container>
            <p>{GithubBlogFiles.name} TODO</p>

            <PrettyJSON name={GithubBlogFiles.name} data={repoContents}/>

        </Container>
    </>
}

const GithubApp = () => {

    return <>
        <h1>{GithubApp.name}</h1>

        <GithubHealthAlert/>

        <hr/>

        <Container>
            <Row>
                <Col>
                    <GithubProfileApplet
                        username={OWNER_GH_USERNAME}
                    />
                </Col>
                <Col>
                    GithubReposApplet TODO

                    {/*<GithubReposApplet*/}
                    {/*    username={OWNER_GH_USERNAME}*/}
                    {/*/>*/}

                </Col>
            </Row>
        </Container>

        <hr/>

        <GithubBlogFiles
            username={OWNER_GH_USERNAME}
            repo={'henryfbp.github.io'}
            path={'content/posts'}
        />
    </>;
}

export default GithubApp

