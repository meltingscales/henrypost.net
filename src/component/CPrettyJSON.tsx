import {Button, Container} from "react-bootstrap";
import {Component} from "react";

type TPrettyJSON = {
    name: string,
    data: ({} | string)
};

class CPrettyJSON extends Component<TPrettyJSON> {
    render() {

        var theObj = this.props.data

        if (typeof (theObj) === 'string') {
            theObj = JSON.parse(theObj)
        }

        var prettyString = JSON.stringify(theObj, null, 2)

        return (
            <Container className={'bg-dark text-white'}>
                <details open>
                    <summary style={{textDecoration: 'underline'}}>
                        {CPrettyJSON.name}: {this.props.name}
                    </summary>
                    <pre><code>{prettyString}</code></pre>
                </details>
            </Container>
        )
    }
}

export default CPrettyJSON;