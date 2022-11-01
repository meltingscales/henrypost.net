import {MBookReview} from "../model/MBookReview";
import {Col, Container, Row} from "react-bootstrap";
import {Component} from "react";
import {CBookReview} from "./CBookReview";


export class CBookReviewLibrary extends Component<{ books: Array<MBookReview>, shouldHideNoReview: boolean }> {
    render() {

        //TODO: Fix the "unique key prop" error. I forget how to do this.

        return <>
            <Container><Row>
                {
                    this.props.books.map((bookReview, index, array) => {

                            if (this.props.shouldHideNoReview) {
                                if (bookReview.hasNoReview()) {
                                    return <Col hidden={true}>
                                        Not rendering as {bookReview.data.title} has no review description :)
                                    </Col>
                                }
                            }

                            return <>
                                <Col>
                                    <CBookReview bookReview={bookReview}/>
                                </Col>
                            </>
                        }
                    )
                }
            </Row></Container>
        </>
    }
}
