import {MRating, TRating} from "./MGenericMediaReview";
import {ReactNode} from "react";
import {DataBoundClass} from "./DataBoundClass";
import {Card, Container} from "react-bootstrap";

type TGame = {
    console?: string
    title: string
    dateReleased?: Date
    link?: string
}

export type TGameReview = {
    rating: TRating
    game: TGame
    review: String | ReactNode
}

export class MGameReview extends DataBoundClass<TGameReview> {


    static renderGameReviewList(someGRList: TGameReview[]) {
        return <Container>

            {
                someGRList.map((it) => {
                    return [
                        MGameReview.renderGameReview(it),
                        <br/>
                    ];
                })
            }

        </Container>
    }

    static renderGameReview(someGR: TGameReview) {
        return <Container>
            <Card>
                <Card.Header>
                    <Card.Title>
                        {someGR.game.title}
                    </Card.Title>
                    <Card.Subtitle>
                        {new MRating(someGR.rating).fmtPretty()}
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {someGR.review}
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    }
}