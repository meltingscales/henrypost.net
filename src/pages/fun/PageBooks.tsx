// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MBookReview} from "../../model/MBookReview";
import {CBookReviewLibrary} from "../../component/CBookReviewLibrary";
import {atom, useRecoilState} from "recoil";


export interface EltBookReviewProps {
    bookReview: MBookReview
}

const someTestState = atom({
    key: 'someTestState',
    default: false,
});


const PageBooks = () => {
    const [testState, setTestState] = useRecoilState(someTestState);

    let bookData: MBookReview[] = MBookReview.loadExampleObjects()

    return <>
        <h1>books</h1>
        <button onClick={x => setTestState(!testState)}>
            click me to test state :)
        </button>
        <CBookReviewLibrary
            someTestState={testState}
            books={bookData}
        />
    </>;
}

export default PageBooks

