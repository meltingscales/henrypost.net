type TBookReview = {
    title: string;
    author?: string;
    review?: string;
    isbn9?: string;
    isbn13?: string;
    thoughts?: string;
    tags?: Array<string>;
}

class BookReview {

    data: TBookReview;

    //TODO this is boilerplate, can we use something like Lombok except for TS?
    // TODO see TODO below... :(
    constructor(data: TBookReview) {
        this.data = data;
    }

    hasBothISBNs(): boolean {
        return ((this.data.isbn9 !== undefined) && (this.data.isbn13 !== undefined))
    }

    static from_json(param: TBookReview) {
        return new BookReview(param)
    }

    static exampleObject(): BookReview {

        var bookList = [
            {
                title: "Coding for Llamas",
                author: "Harry J Llama",
                isbn9: '123456789',
                isbn13: '123456789012',
                review: "9/10",
                thoughts: "A solid beginner book for Llama programming. Don't buy new, it's useful to have as a reference manual though.",
                tags: ['programming', 'llama', 'beginner-programming'],
            },
            {
                title: "Coding for Aardvarks",
                author: "Spiky J Aardvark",
                isbn13: '123456789012',
                review: "8/10",
            },
            {
                title: "Coding for Iguanas",
            },
        ]

        var randElement = bookList[Math.floor(Math.random() * bookList.length)]

        return BookReview.from_json(randElement)

    }

}

export default BookReview