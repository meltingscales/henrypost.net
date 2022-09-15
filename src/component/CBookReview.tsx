import {Card} from "react-bootstrap";
import {EltBookReviewProps} from "../pages/fun/PageBooks";

export const CBookReview = ({bookReview}: EltBookReviewProps) => {

    var eltShortReview = bookReview.renderShortReview()

    var eltTags: JSX.Element = bookReview.renderTags();

    var eltLongReview: JSX.Element = null
    if (bookReview.data.longReview) {
        eltLongReview = <aside>{bookReview.data.longReview}</aside>
    }
    
    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{bookReview.data.title}</Card.Title>
                <hr id={'belowTitle'}/>
                {eltShortReview}
                {eltLongReview}
                {eltTags}
                {bookReview.renderBothISBNs()}
            </Card.Body>
        </Card>
    </>
}
