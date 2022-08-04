import {Button, Container} from "react-bootstrap";

const PrettyJSON = (props:
                        {
                            name: string,
                            data: ({} | string)
                        }
) => {

    var theObj = props.data

    if (typeof (theObj) === 'string') {
        theObj = JSON.parse(theObj)
    }

    var prettyString = JSON.stringify(theObj, null, 2)

    return (
        <Container className={'bg-dark text-white'}>
            <details open>
                <summary style={{textDecoration: 'underline'}}>
                    {PrettyJSON.name}: {props.name}
                </summary>
                <pre><code>{prettyString}</code></pre>
            </details>
        </Container>
    )
}
export default PrettyJSON;