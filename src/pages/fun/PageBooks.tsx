// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MBookReview} from "../../model/MBookReview";
import {CBookReviewLibrary} from "../../component/CBookReviewLibrary";
import {atom, useRecoilState} from "recoil";


export interface EltBookReviewProps {
    bookReview: MBookReview
}

const stateHideNoReview = atom({
    key: 'stateHideNoReview',
    default: false,
});


const PageBooks = () => {
    const [hideNoReview, setHideNoReview] = useRecoilState(stateHideNoReview);

    let bookData: MBookReview[] = MBookReview.loadExampleObjects()

    return <>
        <h1>books</h1>
        <button onClick={() => setHideNoReview(!hideNoReview)}>
            Toggle hiding book with no reviews [={hideNoReview.toString()}]
        </button>
        <CBookReviewLibrary
            shouldHideNoReview={hideNoReview}
            books={bookData}
        />
    </>;
}

export default PageBooks

