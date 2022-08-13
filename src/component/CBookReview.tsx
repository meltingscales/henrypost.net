import {Card, Container} from "react-bootstrap";
import {EltBookReviewProps} from "../pages/hobbies/Books";

export const CBookReview = ({bookReview}: EltBookReviewProps) => {

    var eltShortReview = <></>;
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

    var eltTags: JSX.Element = <></>;
    if (bookReview.data.tags) {
        eltTags = (
            <aside>
                Tags: <i>{(bookReview.data.tags?.join(', '))}</i>
            </aside>
        )

    }

    var eltLongReview: JSX.Element = <></>
    if (bookReview.data.longReview) {
        eltLongReview = <aside>{bookReview.data.longReview}</aside>
    }


    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{bookReview.data.title}</Card.Title>
                <hr/>
                {eltShortReview ? eltShortReview : <hr/>}
                {eltLongReview ? eltLongReview : <hr/>}
                {eltTags === <></> ? eltTags : <hr/>}
                {bookReview.renderBothISBNs()}
            </Card.Body>
        </Card>
    </>
}
