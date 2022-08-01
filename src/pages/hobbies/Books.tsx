// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Col, Container, Row} from "react-bootstrap";

let bookData: any[] = [];

for (let i = 0; i < 10; i++) {
    bookData.push(
        {
            title: "Coding for Aardvarks",
            isbn9: null,
            review: "9/10",
            thoughts: "A solid beginner book for Aardvark programming. Don't buy new, it's useful to have as a reference manual though.",
            tags: ['programming', 'aarvark', 'beginner-programming']
        }
    )
}


const BookReviewLibrary = (props: { books: Array<any> }) => {
    return <>
        <Container>
            <Row>
                {props.books.map((book) => {
                    return <>
                        <Col>
                            <BookReview {...book}/>
                        </Col>
                    </>
                })}
            </Row>
        </Container>
    </>
}

const BookReview = (props: any) => {
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

