type TBookReview = {
    title: string;
    review: string;
    isbn9: string | never;
    isbn13: string | never;
    thoughts: string;
    tags: Array<string>;
}

class BookReview {

    data: TBookReview;

    //TODO this is boilerplate, can we use something like Lombok except for TS?
    // TODO see TODO below... :(
    constructor(data: TBookReview) {
        this.data = data;
    }

    static from_json(param: TBookReview) {
        return new BookReview(param)
    }

    static exampleObject(): BookReview {
        return BookReview.from_json({
            title: "Coding for Llamas",
            isbn9: '123456789',
            isbn13: '123456789012',
            review: "9/10",
            thoughts: "A solid beginner book for Llama programming. Don't buy new, it's useful to have as a reference manual though.",
            tags: ['programming', 'aarvark', 'beginner-programming']
        })

    }

}

export default BookReview