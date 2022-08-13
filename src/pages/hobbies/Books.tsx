// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MBookReview} from "../../model/MBookReview";
import {CBookReviewLibrary} from "../../component/CBookReviewLibrary";


export interface EltBookReviewProps {
    bookReview: MBookReview
}

const Books = () => {

    let bookData: MBookReview[] = MBookReview.loadExampleObjects()

    return <>
        <h1>books</h1>
        <CBookReviewLibrary books={bookData}/>
    </>;
}

export default Books

