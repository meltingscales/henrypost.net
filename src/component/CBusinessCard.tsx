import {Container} from "react-bootstrap";
import {Component} from "react";
import {TextFmtService} from "../service/ServiceTextFmt";
import {LeftRightText} from "./tidbits/LeftRightText";
import "./CBusinessCard.scss"

class CBusinessCard extends Component {

    //inspiration:
    //      https://png.pngtree.com/png-clipart/20200721/original/pngtree-programmer-business-card-black-png-image_4868136.jpg

    //for calc the size later
    static WIDTH = 3.5
    static HEIGHT = 2.0
    static WIDTH_TO_HEIGHT = (CBusinessCard.WIDTH / CBusinessCard.HEIGHT)
    static HEIGHT_TO_WIDTH = (CBusinessCard.HEIGHT / CBusinessCard.WIDTH)

    props: {
        frontBlurb?: any;
        backBlurb?: any;
        name: string,
        headlines: string[],
        cell: string,
        location: string,
        website?: string,
        email?: string,
        skills?: string[],
    } = null;

    renderBack() {
        return <Container className={'business-card business-card-back'}>

            {this.props.backBlurb}

            <span>
                <pre><code>skills = '{this.props.skills.join(',')}'.split(',')</code></pre>
            </span>
        </Container>
    }

    renderFront() {
        return <Container className={'business-card business-card-front'}>
            <h1>{TextFmtService.homeDirFmt(this.props.name.replace(' ', ''))}</h1>
            <pre><code>
                &gt; wget dev.srv/business-card.tex; xdg-open ./business-card.tex &#x23CE;
            </code></pre>
            <p style={{textAlign:'center'}}>{(this.props.headlines.join(' - '))}</p>
            <LeftRightText
                left={this.props.frontBlurb}
                right={
                    <ul style={{listStyle: "none"}}>
                        <li>{this.props.cell}</li>
                        <li>{this.props.location}</li>
                        <li>{this.props.website}</li>
                        <li>{this.props.email}</li>
                    </ul>
                }/>
        </Container>
    }

    render() {
        return <Container className={'business-card-both'}>
            {this.renderFront()}
            <hr/>
            {this.renderBack()}
        </Container>;
    }

    triggerPrint() {
        throw  new Error("TODO NYI")
    }
}

export default CBusinessCard