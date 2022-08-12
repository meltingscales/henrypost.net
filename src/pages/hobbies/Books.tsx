// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BookReview} from "../../model/BookReview";
import {CBookReviewLibrary} from "../../component/CBookReviewLibrary";


export interface EltBookReviewProps {
    bookReview: BookReview
}

const Books = () => {

    let bookData: BookReview[] = BookReview.loadExampleObjects()

    return <>
        <h1>books</h1>
        <CBookReviewLibrary books={bookData}/>
    </>;
}

export default Books

