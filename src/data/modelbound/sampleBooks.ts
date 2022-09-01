import {TBookReview} from "../../model/MBookReview";
import {MRating} from '../../model/MGenericMediaReview'


export let LAZY_BOOKLIST: string[] = `

# from my website
John Dies at the End
The Fruitful Darkness
Anger: Wisdom for Cooling the Flames
Fear: Essential Wisdom for Getting Through the Storm
God is Red
The Martian
Project Hail Mary
2001 A Space Odyssey by Arthur C. Clarke


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
        tags: ['programming']
    },
    {
        title: "Coding for Iguanas",
    },
]

//add LAZY_BOOKLIST to SAMPLE_BOOKS

for (const bookname of LAZY_BOOKLIST) {
    SAMPLE_BOOKS.push({title: bookname})
}