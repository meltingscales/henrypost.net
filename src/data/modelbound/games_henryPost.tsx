import {TGameReview} from "../../model/MGameReview";
import {TRatingUtil} from "../../model/MGenericMediaReview";

export default function HENRY_TGAMEREVIEW_DATA(): TGameReview[] {
    return [
        {
            rating: TRatingUtil.toTRating("10/10"),
            game: {
                title: "Minecraft"
            },
            review: 'i am addicted. go play minecraft NOW!!!!'
        }
    ]
}
