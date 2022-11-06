import {TGameReview} from "../../model/MGameReview";
import {MRating} from "../../model/MGenericMediaReview";

export default function HENRY_TGAMEREVIEW_DATA(): TGameReview[] {
    return [
        {
            rating: MRating.toTRating("10/10"),
            game: {
                title: "itch.io collection"
            },
            review: <a href='https://itch.io/c/249368/henryfbps-collection'>Click here for my itch.io collection</a>
        },
        {
            rating: MRating.toTRating("10/10"),
            game: {
                title: "Steam Profile"
            },
            review: <a href='https://steamcommunity.com/id/meltingscales/'>Click here for my Steam profile</a>
        },
        {
            rating: MRating.toTRating("10/10"),
            game: {
                title: "Minecraft"
            },
            review: 'i am addicted. go play minecraft NOW!!!!'
        }
    ]
}
