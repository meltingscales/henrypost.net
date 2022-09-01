// eslint-disable-next-line @typescript-eslint/no-unused-vars

import {MGameReview} from "../../model/MGameReview";
import HENRY_TGAMEREVIEW_DATA from "../../data/modelbound/games_henryPost";

const PageVideogames = () => {

    return <>
        <h1>videogames</h1>
        {MGameReview.renderGameReviewList(HENRY_TGAMEREVIEW_DATA())}
    </>;
}

export default PageVideogames

