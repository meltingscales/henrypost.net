import {MLinkDatum, TLinkDatum} from "../../model/MLinkData";

var LAZYURLLIST = `https://www.sigstore.dev/
https://in-toto.io/
https://slsa.dev/
https://www.dropwizard.io/en/latest/#
https://go.dev/doc/tutorial/getting-started
https://puppet.com/
https://www.chef.io/
https://www.openstack.org/
https://www.exploit-db.com/docs/english/44457-polymorph-a-real-time-network-packet-manipulation-framework.pdf
https://vincent.bernat.ch/en
https://github.com/akvorado/akvorado
Golang videogame framework
golang ui framework
clojure lang
https://kondukto.io/
https://github.com/paragonie/awesome-appsec
https://github.com/analysis-tools-dev/static-analysis
https://analysis-tools.dev/
https://github.com/analysis-tools-dev/
https://www.parrotsec.org/
https://youtu.be/OyLFPGRzSEs
https://ebitengine.org/`

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

LAZYURLLIST
    .split('\n')
    .forEach((it) => {
            return LINK_DATA.push({
                category: "Lazy, uncategorized URL list", text: it, url: it
            });
        }
    )

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

