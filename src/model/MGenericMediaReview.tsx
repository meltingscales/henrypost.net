import {Card, Container} from "react-bootstrap";
import {DataBoundClass} from "./DataBoundClass";

export type TRating = {
    lowerBound: any
    upperBound: any
    rating: any
}

export class TRatingUtil {

    /**
     * it just returns a rating bro
     * example:
     *
     * '9/10' -> some TRating object
     */
    static toTRating(s: string): TRating {
        var split = s.split('/')

        return {
            lowerBound: 0,
            upperBound: split[1],
            rating: split[0],
        }
    }

}

export type TGenericMediaReview = {
    title: string
    author?: string
    url?: string
    datePublished?: Date
    rating?: TRating;
    shortReview?: string
    longReview?: string
    tags?: Array<string>;
}

export class MGenericMediaReview extends DataBoundClass<TGenericMediaReview> {

    hasShortReview() {
        return !!this.data.shortReview;
    }

    hasLongReview(): boolean {
        return !!this.data.longReview;
    }

    renderShortReview(): JSX.Element {

        if (!this.hasShortReview()) {
            return null;
        }

        return (
            <Card.Text className="mb-2">
                <p>Short Review:</p>
                <Container>
                    <i>{this.data.shortReview}</i>
                </Container>
            </Card.Text>
        )
    }

}

