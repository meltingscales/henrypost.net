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
    static toRating(s: string): TRating {
        var split = s.split('/')

        return {
            lowerBound: 0,
            upperBound: split[1],
            rating: split[0],
        }
    }

}

export type IGeneralMediaReview = {
    title: string
    author?: string
    url?: string
    datePublished?: Date
    rating?: TRating;
    shortReview?: string
    longReview?: string
    tags?: Array<string>;
}

export class GenericMediaReview {
    data: IGeneralMediaReview

    constructor(data: IGeneralMediaReview) {
        this.data = data;
    }
}

