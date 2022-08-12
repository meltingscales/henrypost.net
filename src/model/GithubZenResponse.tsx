import {Container} from "react-bootstrap";
import CPrettyJSON from "../component/CPrettyJSON";

class GithubZenResponse {
    response: Response
    statusCode: number;
    responseText: string;
    timestamp: Date;

    constructor(response: Response, responseText: string) {
        this.response = response
        this.responseText = responseText
        this.statusCode = response.status
        this.timestamp = new Date()
    }

    healthy() {
        return this.statusCode === 200
    }

    asErrorElt() {

        var respObject = JSON.parse(this.responseText)

        return <Container>
            <p>Status code: {this.statusCode}</p>
            <CPrettyJSON data={respObject} name={"/zen"}/>
        </Container>
    }

    asSuccessElt() {
        return <Container>
            <p>Github is online at {this.timestamp.toString()}!</p>
            <p>Quote: "{this.responseText}"</p>
        </Container>
    }


}


export default GithubZenResponse;