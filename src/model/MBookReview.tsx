import {MGenericMediaReview, TGenericMediaReview} from "./MGenericMediaReview";

import {SAMPLE_BOOKS} from "../data/modelbound/sampleBooks";
import {Card, Container} from "react-bootstrap";
import {Config} from "../Config";

export type TBookReview = TGenericMediaReview & {
    isbn9?: string;
    isbn13?: string;
}

export class MBookReview extends MGenericMediaReview {

    data: TBookReview = null;

    constructor(data: TBookReview) {
        super(data)
        this.data = data;
    }


    static from_json(param: TBookReview) {
        return new MBookReview(param)
    }

    static loadExampleObjects(): MBookReview[] {

        let books: MBookReview[] = []

        for (let index in SAMPLE_BOOKS) {
            const samplebook = SAMPLE_BOOKS[index];

            books.push(MBookReview.from_json(samplebook))
        }

        // console.log(SAMPLE_BOOKS)
        // console.log(books)

        return books
    }

    renderShortReview() {
        return super.renderShortReview()
    }

    hasBothISBNs(): boolean {
        return (this.hasIsbn9() && this.hasIsbn13())
    }

    hasNoISBNs(): boolean {
        return ((!this.hasIsbn9()) && (!this.hasIsbn13()))
    }

    renderBothISBNs() {

        if (this.hasNoISBNs()) {
            return <>
                <p className={'text-muted'}>No ISBN.</p>
            </>
        }

        return <Container>
            <p className={'text-muted'}>ISBNs:</p>
            {this.hasIsbn9() ? this.renderISBN9() : <></>}
            {this.hasIsbn13() ? this.renderISBN13() : <></>}
        </Container>
    }

    renderISBN9() {
        return <>
            <Card.Link href={Config.ISBN_URL + this.data.isbn9}>
                ISBN-9: {this.data.isbn9}
            </Card.Link>
        </>;
    }

    renderISBN13() {
        return <>
            <Card.Link href={Config.ISBN_URL + this.data.isbn13}>
                ISBN-13: {this.data.isbn13}
            </Card.Link>
        </>
    }

    hasIsbn9() {
        return !!this.data.isbn9;
    }

    hasIsbn13() {
        return !!this.data.isbn13;
    }

    renderTags() {

        if (!this.hasTags()) {
            return null
        }

        return (
            <aside>
                Tags: <i>{(this.data.tags?.join(', '))}</i>
            </aside>
        )
    }

    hasTags() {
        return !!this.data.tags;
    }

    hasNoReview() {
        return !(this.data.shortReview) && !(this.data.longReview)
    }
}