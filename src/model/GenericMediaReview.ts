type TRating = {
    lowerBound: any
    upperBound: any
    rating: any
}

export type TGenericMediaReview = {
    title: string
    author?: string
    url?: string
    datePublished?: Date
    rating?: TRating
    shortReview?: string
    longReview?: string
    tags?: Array<string>;
}

export class GenericMediaReview {
    data: TGenericMediaReview

    constructor(data: TGenericMediaReview) {
        this.data = data;
    }
}

