// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Container, Row} from "react-bootstrap";
import BookReview from '../../model/BookReview'


let bookData: BookReview[] = [];

for (let i = 0; i < 10; i++) {
    bookData.push(
        BookReview.example()
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
    return <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>Review: {props.review}</Card.Subtitle>
                <p>ISBN-9: {props.isbn9}</p>
                <aside>{props.thoughts}</aside>
                <aside>Tags: {(props.tags.join(', '))}</aside>
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

