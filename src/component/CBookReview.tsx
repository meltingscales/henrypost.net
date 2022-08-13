import {Card, Container} from "react-bootstrap";
import {EltBookReviewProps} from "../pages/hobbies/Books";

export const CBookReview = ({bookReview}: EltBookReviewProps) => {

    var eltISBNLinks: JSX.Element[] = [];

    if (bookReview.hasIsbn9()) {
        eltISBNLinks.push(bookReview.renderISBN9())
    }

    if (bookReview.hasIsbn13()) {

        if (bookReview.hasBothISBNs()) {
            eltISBNLinks.push(<br/>) //add spacing if 2 ISBNs
        }

        eltISBNLinks.push(bookReview.renderISBN13())
    }

    if (eltISBNLinks.length === 0) {
        eltISBNLinks.push(<>
            <p className={'text-muted'}>No ISBN.</p>
        </>)
    }

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

    var eltTags = <></>;
    if (bookReview.data.tags) {
        eltTags = (
            <aside>
                Tags: <i>{(bookReview.data.tags?.join(', '))}</i>
            </aside>
        )

    }

    var eltLongReview = <></>
    if (bookReview.data.longReview) {
        eltLongReview = <aside>{bookReview.data.longReview}</aside>
    }

    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{bookReview.data.title}</Card.Title>
                {eltShortReview}
                {eltLongReview}
                {eltTags}
                {eltISBNLinks}
            </Card.Body>
        </Card>
    </>
}
