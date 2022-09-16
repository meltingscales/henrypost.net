import {TBookReview} from "../../model/MBookReview";
import {MRating} from '../../model/MGenericMediaReview'


export let LAZY_BOOKLIST: string[] = `

# from my website


# assorted dev/programming
Cracking the coding interview

Elements of programming interviews

Grokking the systems design interview

97 things every java programmer should know

java the complete reference: 11th edition

Pearson: Test Driven Development

Pearson: Java Concurrency in practice

OCA Oracle Certified Associate Java SE & Programmer 1

Effective Java Third Edition

Java Generics and Connections

Java 8 in Action

Building Microservices

Clean Code

Cracking the Coding Interview

Rails, Angular, Postgres, Bootstrap - Copeland

Getting Started with React - Doel Sengupta

STARTING OUT WITH C++ From Control Structures through Objects

# Scifi/fantasy from my good friend Brian

A. Lee martinez
John birmingham - toy soldier
futurisc violence and fancy suits
this book is full of spiders seriously dont open it
Too many curses a lee martinez
andrew seiple - Threadbare
andrew seiple - Dire series
Forging Hephaestus
small medium at large
Dakota krout - Completionist chronicles 3.5:  Rexus
J Zachary Pike - The Dark Profit Saga
John Scalzi (Red shirts, Interdependency, old mans war, fuzzy nation)
A. Lee Martinez - Emperor Mollusk Versus the Sinister Brain
A. Lee Martinez - The Automatic Detective
Drew Hayes - NPCs
tr cameron cahos shift cycle
l.g estrella  Two Necromancers, a Bureaucrat, and an Elf (The Unconventional Heroes Series Book 1
Terry Pratchett - (Guards, Guards, The colour of magic, Mort)
Richard adams - Watership Down
drew hayes - split the party
Supervillainy and Other Poor Career Choices
John Birmingham - Daves vs the monsters
Janitors Of The Post Apocalyspe
jim c hines - goblin tales
Jon Hollins - The Dragon Lords 1 - Fool's Gold

# Agile “A”
The Unicorn Project

The Fifth Discipline (Peter Senjay)
#“Systems Thinking”

Reinventing the Organization

Sprint*
# Jake Nopp

Innovation
#5 Disciplines
#NABC
#BLUF

Inspired
# Mary (Doe?)



### Agile “B”
The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth
Enterprise Agility: Being Agile in a Changing World
Total Leadership: Be a Better Leader, Have a Richer Life
Who Moved My Cheese?: An A-Mazing Way to Deal with Change in Your Work and in Your Life
"The Sprint Book" https://www.thesprintbook.com/


`.split('\n') //split by newline
    .filter((it) => it.length > 0) //ignore empty strings
    .filter((it) => it.trim()[0] != '#') //ignore comments (start with #)

export let SAMPLE_BOOKS: TBookReview[] = [
    {
        title: '2001 A Space Odyssey',
        author: 'Arthur C. Clarke',
        shortReview: 'It\'s a lot better than the movie.'
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        shortReview: 'Another Andy Weir gem. It\'s even better than The Martian.',
        rating: MRating.toTRating('12/10'),
    },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        shortReview: 'Sci-fi and fun as hell, trapped on Mars! It\'s Andy Weir baby!',
        rating: MRating.toTRating('11/10'),
    },
    {
        title: 'God is Red',
        shortReview: 'Very well-read (and dry) book on Native Americans and their cultural interactions with the USA, specifically related to religion. Wish I had more time to read this one.',
        rating: MRating.toTRating('8/10'),
    },
    {
        title: 'Fear: Essential Wisdom for Getting Through the Storm',
        shortReview: 'Great book on fear from a buddhist perspective. Pretty similar to the anger one. Very general advice, but compassionate and full of wisdom.',
        rating: MRating.toTRating('8/10'),
    },
    {
        title: 'Anger: Wisdom for Cooling the Flames',
        shortReview: 'Great book on anger from a buddhist perspective. Very general advice, but compassionate and full of wisdom.',
        rating: MRating.toTRating('8/10'),
    },
    {
        title: 'The Fruitful Darkness',
        shortReview: 'Very emotional collection of stories from a woman exploring how other cultures deal with Life and Death. This book touched me and helped me process my own experiences with family death, in a very positive way.',
        rating: MRating.toTRating('10/10'),
    },
    {
        title: 'John Dies at the End',
        shortReview: 'Fantastic and bizarre novel. Extremely engaging. Read this blind, you will love it.',
        rating: MRating.toTRating('10/10'),
    },
    {
        title: "Coding for Llamas",
        author: "Harry J Llama",
        isbn9: '123456789',
        isbn13: '123456789012',
        rating: MRating.toTRating('9/10'),
        shortReview: "A solid beginner book for Llama programming. Don't buy new, it's useful to have as a reference manual though.",
        tags: ['programming', 'llama', 'beginner-programming'],
    },
    {
        title: "Coding for Aardvarks",
        author: "Spiky J Aardvark",
        isbn13: '123456789012',
        rating: MRating.toTRating("8/10"),
        tags: ['programming'],
    },
    {
        title: "Coding for Iguanas",
    },
]

//add LAZY_BOOKLIST to SAMPLE_BOOKS

for (const bookname of LAZY_BOOKLIST) {
    SAMPLE_BOOKS.push({title: bookname, tags: ['reading-backlog']})
}