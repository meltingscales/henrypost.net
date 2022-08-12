import {BookReview} from "../model/BookReview";
import {Col, Container, Row} from "react-bootstrap";
import {Component} from "react";
import {CBookReview} from "./CBookReview";


export class CBookReviewLibrary extends Component<{ books: Array<BookReview> }> {
    render() {

        //TODO: Fix the "unique key prop" error. I forget how to do this.

        return <>
            <Container>
                <Row>
                    {
                        this.props.books.map((bookReview, index, array) => {
                                return <>
                                    <Col>
                                        <CBookReview bookReview={bookReview}/>
                                    </Col>
                                </>
                            }
                        )
                    }
                </Row>
            </Container>
        </>
    }
}
