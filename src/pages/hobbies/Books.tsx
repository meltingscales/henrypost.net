// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Card, Container} from "react-bootstrap";

const bookData = [
    {
        title: "Coding for Aardvarks",
        isbn9: null,
        review: "9/10",
        thoughts: "A solid beginner book for Aardvark programming. Don't buy new, it's useful to have as a reference manual though.",
        tags: ['programming', 'aarvark', 'beginner-programming']
    },
    {
        title: "Coding for Aardvarks",
        isbn9: '12345667',
        review: "9/10",
        thoughts: "A solid beginner book for Aardvark programming. Don't buy new, it's useful to have as a reference manual though.",
        tags: ['programming', 'aarvark', 'beginner-programming']
    },
    {
        title: "Coding for Aardvarks",
        isbn9: '12345667',
        review: "9/10",
        thoughts: "A solid beginner book for Aardvark programming. Don't buy new, it's useful to have as a reference manual though.",
        tags: ['programming', 'aarvark', 'beginner-programming']
    }
]

const BookLibrary = (props: { books: Array<any> }) => {
    return <>
        <Container>
            {props.books.map((book) => {
                return <BookReview {...book}/>
            })}
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
            </Card.Body>
        </Card>
    </>
}

const Books = () => {

    return <>
        <h1>books</h1>
        <BookLibrary books={bookData}/>
    </>;
}

export default Books

