import {MLinkDatum, TLinkDatum} from "../../model/MLinkData";

const LINK_DATA: TLinkDatum[] = [
    {
        text: 'Bret Weinstein, Evolutionary Biologist',
        url: 'https://en.wikipedia.org/wiki/Bret_Weinstein',
        category: 'Science'
    },
    {
        text: "Old links list",
        url: 'https://github.com/HenryFBP/henryfbp.github.io/blob/master/content/cool-links/_index.md',
        category: 'Uncategorized',
    },
    {
        text: "Old personal website",
        url: 'https://henryfbp.github.io/',
        category: 'Uncategorized',
    },
]

const PageCoolLinks = () => {

    return <>
        <h1>cool links</h1>
        <div>some link list :) TODO make it pretty like the other pages</div>

        {MLinkDatum.render_link_data_by_category(LINK_DATA)}
        {/*TODO add more links from todd*/}

        <h2>Uncategorized:</h2>

        https://github.com/lynn/lynn.github.io
        https://metaphorician.substack.com/p/in-the-belly-of-a-beast
        https://github.com/HenryFBP/henryfbp.github.io/blob/master/content/cool-links/_index.md
        https://hackaday.io/project/187525-qaz-personal-terminal
        https://howl-out.com/
        Everything Everywhere all at Once
        https://www.beautifulnerdy.com/
        https://hyena-agenda.com/
        https://fluffnest.com/
        https://www.creepcattoyco.com/
        https://nomadcomplex.com/
        https://clammyheart.shop/
        https://sparklecats2009art.square.site/?utm_source=sqmktg_email
    </>;
}

export default PageCoolLinks

