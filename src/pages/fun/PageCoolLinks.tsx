import {MLinkDatum, TLinkDatum} from "../../model/MLinkData";

const LINK_DATA: TLinkDatum[] = [
    {
        text: "\"Stop Writing Dead Programs\" by Jack Rusher (Strange Loop 2022)\n",
        url: 'https://www.youtube.com/watch?v=8Ab3ArE8W3s',
        category: 'Programming',
    },
    {
        text: "B3AGZ",
        url: "https://b3agz.com/",
        category: "Cool Programming Sites",
        comment: "A cool gamedev person.",
    },
    {
        text: "michaelwalczyk.com",
        url: "https://michaelwalczyk.com/",
        category: "Cool Programming Sites",
        comment: "Fractals!",
    },
    {
        text: "patricklipinski.de",
        url: 'https://patricklipinski.de/',
        'category': "Cool Sites"
    },
    {
        text: "ffmpeg.guide",
        url: "https://ffmpeg.guide/",
        category: "Tech Tools",
        comment: "FFmpeg except visual.",
    },
    {
        text: "In the Belly of a Beast - Metaphorician",
        url: 'https://metaphorician.substack.com/p/in-the-belly-of-a-beast',
        comment: "This article talks about our inherently limited capacity to think. It's pretty good.",
        category: 'Philosophy',
    },
    {
        text: "Metaphorician",
        url: 'https://metaphorician.substack.com/',
        category: 'Philosophy',
    },
    {
        text: "Architect of Thought",
        url: 'https://mindmagic.substack.com/',
        category: 'Philosophy',
    },
    {
        text: "Hackaday QAZ Personal Terminal",
        url: 'https://hackaday.io/project/187525-qaz-personal-terminal',
        category: 'Hardware',
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

