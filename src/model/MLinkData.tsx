import {DataBoundClass} from "./DataBoundClass";
import {Container} from "react-bootstrap";

const OneLink = (props: { link: string, title: string }) => {
    return <>
        <p><a href={props.link}>{props.title}</a></p>
    </>
}


export type TLinkDatum = {
    text: string,
    url: string,
    category: string,
}

export class MLinkDatum extends DataBoundClass<TLinkDatum> {

    data: TLinkDatum = null;

    constructor(data: TLinkDatum) {
        super(data)
        this.data = data;
    }


    static render_link_datum = (link_datum: TLinkDatum) => {
        return <OneLink link={link_datum.url} title={link_datum.text}/>
    }

    static render_link_data = (link_data: TLinkDatum[]) => {
        return <ul>
            {link_data.map(it => {
                return <li>{MLinkDatum.render_link_datum(it)}</li>
            })}
        </ul>
    }

    static render_link_data_by_category = (link_data: TLinkDatum[]) => {

        var link_data_by_category: { [key: string]: TLinkDatum[] } = {}

        //sort by category
        for (const i in link_data) {
            var link_datum: TLinkDatum = link_data[i]

            //if it dne, add []
            if (!(link_datum.category in link_data_by_category)) {
                link_data_by_category[link_datum.category] = []
            }

            //add by category
            link_data_by_category[link_datum.category].push(link_datum)
        }

        console.log(link_data_by_category)

        var elements = []

        for (var category in link_data_by_category) {
            var link_data_sorted = link_data_by_category[category];

            var categoryElt = <Container>
                <h2>{category}</h2>
                {
                    MLinkDatum.render_link_data(link_data_sorted)
                }
            </Container>
            elements.push(categoryElt)
        }

        return <Container>
            {elements}
        </Container>
    }

}