// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Container, Row} from "react-bootstrap";
import {Config} from '../../Config'
import {BookReview} from "../../model/BookReview";


let bookData: BookReview[] = BookReview.loadExampleObjects()


const BookReviewLibrary = (props: { books: Array<BookReview> }) => {
    return <>
        <Container>
            <Row>
                {props.books.map((bookReview) => {
                    return <>
                        <Col>
                            <EltBookReview bookReview={bookReview}/>
                        </Col>
                    </>
                })}
            </Row>
        </Container>
    </>
}

interface EltBookReviewProps {
    bookReview: BookReview
}

const EltBookReview = ({bookReview}: EltBookReviewProps) => {

    var eltISBNLinks: JSX.Element[] = [];

    if (bookReview.data.isbn9) {
        eltISBNLinks.push(
            <>
                <Card.Link href={Config.ISBN_URL + bookReview.data.isbn9}>
                    ISBN-9: {bookReview.data.isbn9}
                </Card.Link>
            </>
        )
    }
    if (bookReview.data.isbn13) {
        if (bookReview.hasBothISBNs()) {
            eltISBNLinks.push(<br/>)
        }
        eltISBNLinks.push(
            <>
                <Card.Link href={Config.ISBN_URL + bookReview.data.isbn13}>
                    ISBN-13: {bookReview.data.isbn13}
                </Card.Link>
            </>
        )
    }

    if (eltISBNLinks.length === 0) {
        eltISBNLinks.push(<>
            <p className={'text-muted'}>No ISBN.</p>
        </>)
    }

    var eltReview = <></>;
    if (bookReview.data.shortReview) {
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

const Books = () => {

    return <>
        <h1>books</h1>
        <BookReviewLibrary books={bookData}/>
    </>;
}

export default Books

