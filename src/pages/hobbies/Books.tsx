// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Container, Row} from "react-bootstrap";
import BookReview from '../../model/BookReview'


let bookData: BookReview[] = [];

for (let i = 0; i < 10; i++) {
    bookData.push(
        BookReview.exampleObject()
    )
}


const BookReviewLibrary = (props: { books: Array<any> }) => {
    return <>
        <Container>
            <Row>
                {props.books.map((book) => {
                    return <>
                        <Col>
                            <EltBookReview {...book}/>
                        </Col>
                    </>
                })}
            </Row>
        </Container>
    </>
}

const EltBookReview = (props: BookReview) => {

    var isbnLinks: JSX.Element[] = [];


    if (props.isbn9) {
        isbnLinks.push(
            <>
                <Card.Link href="#">ISBN-9: {props.isbn9}</Card.Link>
            </>
        )
    }
    if (props.isbn13) {
        isbnLinks.push(
            <>
                <Card.Link href="#">ISBN-13: {props.isbn13}</Card.Link>
            </>
        )
    }

    if (isbnLinks.length === 0) {
        isbnLinks.push(<>
            <p className={'text-muted'}>No ISBN.</p>
        </>)
    }

    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Review: {props.review}
                </Card.Subtitle>
                <aside>{props.thoughts}</aside>
                <aside>Tags: {(props.tags.join(', '))}</aside>
                {isbnLinks}
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

