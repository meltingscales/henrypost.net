import {TBookReview} from "../model/MBookReview";
import {TRatingUtil} from '../model/MGenericMediaReview'

export let SAMPLE_BOOKS: TBookReview[] = [
    {
        title: "Coding for Llamas",
        author: "Harry J Llama",
        isbn9: '123456789',
        isbn13: '123456789012',
        rating: TRatingUtil.toTRating('9/10'),
        shortReview: "A solid beginner book for Llama programming. Don't buy new, it's useful to have as a reference manual though.",
        tags: ['programming', 'llama', 'beginner-programming'],
    },
    {
        title: "Coding for Aardvarks",
        author: "Spiky J Aardvark",
        isbn13: '123456789012',
        rating: TRatingUtil.toTRating("8/10"),
        tags: ['programming']
    },
    {
        title: "Coding for Iguanas",
    },
]