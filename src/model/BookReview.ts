class BookReview {

    title: string;
    review: string;
    isbn9: string;
    thoughts: string;
    tags: Array<string>;

    //TODO this is boilerplate, can we use something like Lombok except for TS?
    // TODO see TODO below... :(
    constructor(
        title: string,
        review: string,
        isbn9: string,
        thoughts: string,
        tags: Array<string>
    ) {
        this.title = title;
        this.review = review;
        this.isbn9 = isbn9;
        this.thoughts = thoughts;
        this.tags = tags;
    }

    static from_json(param: any) {
        //Wow! THIS SUCKS! There's no way this is the right way to do JSON-POJO mapping.
        // TODO: Google the correct way to do JSON-POJO mapping in TypeScript
        return new BookReview(
            param.title,
            param.review,
            param.isbn9,
            param.thoughts,
            param.tags
        )
    }

    static example(): BookReview {
        return BookReview.from_json({
            title: "Coding for Llamas",
            isbn9: null,
            review: "9/10",
            thoughts: "A solid beginner book for Llama programming. Don't buy new, it's useful to have as a reference manual though.",
            tags: ['programming', 'aarvark', 'beginner-programming']
        })

    }

}

export default BookReview