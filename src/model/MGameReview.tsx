import {TRating} from "./MGenericMediaReview";
import {ReactNode} from "react";
import {DataBoundClass} from "./DataBoundClass";

type TGame = {
    console: string
    title: string
    dateReleased: Date
    link: string
}

export type TGameReview = {
    rating: TRating
    game: TGame
    review: String | ReactNode
}

export class MGameReview extends DataBoundClass<TGameReview> {
    
}