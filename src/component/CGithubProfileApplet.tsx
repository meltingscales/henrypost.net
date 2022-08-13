import {GithubService} from "../service/ServiceGithub";
import {useEffect, useState} from "react";
import {Card} from "react-bootstrap";

function GithubProfileCard(props: any) {

    return <>
        <Card style={{width: '200px'}}>
            <Card.Img src={props.avatar_url}></Card.Img>
            {!props.bio ? <i>"No biography."</i> : <p>{props.bio}</p>}
        </Card>
    </>
}

const CGithubProfileApplet = (props: { username: string }) => {

    const [ghProfileData, setGhProfileData] = useState<any | null>(null)

    useEffect(() => {

            const fetchData = async () => {
                const resp = await GithubService.fetchGithubProfile(props.username)

                const json: Object = await resp.json()

                console.log(json)

                setGhProfileData(json)
            }

            fetchData()

        },
        [props.username]
    )

    if (!ghProfileData) {
        return <div>{CGithubProfileApplet.name} not loaded.</div>
    }

    return <>
        <GithubProfileCard {...ghProfileData}/>
    </>
}

export default CGithubProfileApplet