import {Card} from "react-bootstrap";
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

    var eltReview = <></>;
    if (bookReview.hasShortReview()) {
        eltReview = (
            <Card.Subtitle className="mb-2 text-muted">
                Short Review: {bookReview.data.shortReview}
            </Card.Subtitle>
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

    var eltThoughts = <></>
    if (bookReview.data.shortReview) {
        eltThoughts = <aside>{bookReview.data.shortReview}</aside>
    }

    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{bookReview.data.title}</Card.Title>
                {eltReview}
                {eltThoughts}
                {eltTags}
                {eltISBNLinks}
            </Card.Body>
        </Card>
    </>
}
