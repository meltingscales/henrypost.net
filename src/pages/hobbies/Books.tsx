// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Container, Row} from "react-bootstrap";
import BookReview from '../../model/BookReview'
import {Config} from '../../Config'


let bookData: BookReview[] = [];

for (let i = 0; i < 10; i++) {
    bookData.push(
        BookReview.exampleObject()
    )
}


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
                <Card.Link href={Config.ISBN_URL + bookReview.data.isbn9}>ISBN-9: {bookReview.data.isbn9}</Card.Link>
            </>
        )
    }
    if (bookReview.data.isbn13) {
        if (bookReview.hasBothISBNs()) {
            eltISBNLinks.push(<br/>)
        }
        eltISBNLinks.push(
            <>
                <Card.Link href="#">ISBN-13: {bookReview.data.isbn13}</Card.Link>
            </>
        )
    }

    if (eltISBNLinks.length === 0) {
        eltISBNLinks.push(<>
            <p className={'text-muted'}>No ISBN.</p>
        </>)
    }

    var eltReview = <></>;
    if (bookReview.data.review) {
        eltReview = (
            <Card.Subtitle className="mb-2 text-muted">
                Review: {bookReview.data.review}
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

    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{bookReview.data.title}</Card.Title>
                {eltReview}
                <aside>{bookReview.data.thoughts}</aside>
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
        <Container>

            <p>example stuff:</p>

            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>


        </Container>
    </>;
}

export default Books

