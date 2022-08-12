import {GenericMediaReview, IGeneralMediaReview} from "./GenericMediaReview";

import {SAMPLE_BOOKS} from "../data/sampleBooks";

export type TBookReview = IGeneralMediaReview & {
    isbn9?: string;
    isbn13?: string;
}

export class BookReview {

    data: TBookReview;

    constructor(data: TBookReview) {
        this.data = data;
    }

    hasBothISBNs(): boolean {
        return ((this.data.isbn9 !== undefined) && (this.data.isbn13 !== undefined))
    }

    static from_json(param: TBookReview) {
        return new BookReview(param)
    }

    static loadExampleObjects(): BookReview[] {

        let books: BookReview[] = []

        for (let index in SAMPLE_BOOKS) {
            const samplebook = SAMPLE_BOOKS[index];

            books.push(BookReview.from_json(samplebook))
        }

        return books
    }
}