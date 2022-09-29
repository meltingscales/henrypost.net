import {ListGroup} from "react-bootstrap"

const ListGroupItemLink = (props: any) => {
    return <ListGroup.Item href={props.link} action>
        {props.text}
    </ListGroup.Item>
}

export default ListGroupItemLink