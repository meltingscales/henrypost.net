import {Container} from "react-bootstrap";
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
            todo lol. {GithubBlogFiles.name}

            <PrettyJSON name={GithubBlogFiles.name} data={repoContents}/>

        </Container>
    </>
}

const GithubApp = () => {

    return <>
        <h1>{GithubApp.name} wip</h1>
        <GithubHealthAlert/>
        <GithubProfileApplet username={OWNER_GH_USERNAME}/>
        <GithubBlogFiles
            username={OWNER_GH_USERNAME}
            repo={'henryfbp.github.io'}
            path={'content/posts'}
        />
    </>;
}

export default GithubApp

