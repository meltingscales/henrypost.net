import {Card, Container} from "react-bootstrap";
import {EltBookReviewProps} from "../pages/hobbies/Books";

export const CBookReview = ({bookReview}: EltBookReviewProps) => {

    var eltShortReview = null;
    if (bookReview.hasShortReview()) {
        eltShortReview = (

            <Card.Text className="mb-2">
                <p>Short Review:</p>
                <Container>
                    <i>{bookReview.data.shortReview}</i>
                </Container>
            </Card.Text>
        )
    }

    var eltTags: JSX.Element = null;
    if (bookReview.data.tags) {
        eltTags = (
            <aside>
                Tags: <i>{(bookReview.data.tags?.join(', '))}</i>
            </aside>
        )

    }

    var eltLongReview: JSX.Element = null
    if (bookReview.data.longReview) {
        eltLongReview = <aside>{bookReview.data.longReview}</aside>
    }


    console.log(eltShortReview)
    console.log(eltLongReview)
    console.log(eltTags)


    if (eltShortReview === null) {
        eltShortReview = null
    }

    if (eltLongReview === null) {
        eltLongReview = null
    }

    if (eltTags === null) {
        eltTags = null
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
