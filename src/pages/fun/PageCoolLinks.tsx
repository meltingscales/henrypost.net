import {MLinkDatum, TLinkDatum} from "../../model/MLinkData";

const LINK_DATA: TLinkDatum[] = [
    {
        text: 'Bret Weinstein, Evolutionary Biologist',
        url: 'https://en.wikipedia.org/wiki/Bret_Weinstein',
        category: 'Science'
    },
    //TODO add more links from todd
    {
        text: "Old links list",
        url: 'https://github.com/HenryFBP/henryfbp.github.io/blob/master/content/cool-links/_index.md',
        category: 'Henry',
    },
    {
        text: "Old personal website",
        url: 'https://henryfbp.github.io/',
        category: 'Henry',
    },
    {
        text: "lynn.github.io",
        url: 'https://github.com/lynn/lynn.github.io',
        comment: "Test comment",
        category: 'Cool Programming Sites',
    },
    {
        text: "In the Belly of a Beast - Metaphorician",
        url: 'https://metaphorician.substack.com/p/in-the-belly-of-a-beast',
        category: 'Philosophy',
    },
    {
        text: "Metaphorician",
        url: 'https://metaphorician.substack.com/',
        category: 'Philosophy',
    },
    {
        text: "JettProof (Sensory/Autism clothing)",
        url: 'https://www.jettproof.com.au/',
        category: 'Clothing',
    },
    {
        text: "Hackaday QAZ Personal Terminal",
        url: 'https://hackaday.io/project/187525-qaz-personal-terminal',
        category: 'Hardware',
    },
    {
        text: "Creep Cat Toy Company",
        url: 'https://www.creepcattoyco.com/',
        category: 'Plushies',
    },
    {
        text: "Fluff Nest",
        url: 'https://fluffnest.com/',
        category: 'Plushies',
    },
    {
        text: "Nomad Complex",
        url: 'https://nomadcomplex.com/',
        category: 'Clothing',
    },
    {
        text: "Hyena Agenda",
        url: 'https://hyena-agenda.com/',
        category: 'Clothing',
    },
    {
        text: "Beautiful Nerdy",
        url: 'https://www.beautifulnerdy.com/',
        category: 'Clothing',
    },
    {
        text: "HOWL OUT",
        url: 'https://howl-out.com/',
        category: 'Clothing',
    },
    {
        text: "Clammy Heart",
        url: 'https://clammyheart.shop/',
        category: 'Clothing',
    },
    {
        text: "Sparklecats 2009 Art",
        url: 'https://sparklecats2009art.square.site/',
        category: 'Merch',
    },
]

console.log("LINK_DATA:")
console.log(LINK_DATA)

console.log("Categories:")
console.log(MLinkDatum.get_all_categories(LINK_DATA))

const PageCoolLinks = () => {

    return <>
        <h1>Cool Links</h1>

        {MLinkDatum.render_link_data_by_category(LINK_DATA)}
    </>;
}

export default PageCoolLinks

