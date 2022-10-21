import React from 'react';
import {Container} from "react-bootstrap";

var photo_links = [
    {
        'title': '2016 - IIT Sophomore Leadership Retreat',
        'link': 'https://imgur.com/a/isjpRde'
    },
    {
        'title': '2018 - MV',
        'link': 'https://imgur.com/a/fJBNEbT'
    },
    {
        link: 'https://imgur.com/a/v0c9Nea',
        title: '2019 - CT',
    },
    {
        title: '2019 - Portland, OR',
        link: 'https://imgur.com/a/0vJw7O6'
    },
    {
        title: '2021 - Martha\'s Vineyard Biking 2 weeks',
        link: 'https://imgur.com/a/zpsVhwD'
    },
    {
        title: '2021 - Upper LSD Biking',
        link: 'https://imgur.com/a/gUj1BiO'
    },
    {
        title: '2021 - FL',
        link: 'https://imgur.com/a/mWtQFJU'
    },
    {
        title: '2021 - Martha\'s Vineyard Beginning',
        link: 'https://imgur.com/a/YCRFC7s'
    },
    {
        title: '2022 - Martha\'s Vineyard General Album',
        link: 'https://photos.app.goo.gl/CAah7RZJDQYYviqK9'
    },
    {
        title: '2022 May - Martha\'s Vineyard West Tisbury Mini-Vacation',
        link: 'https://photos.app.goo.gl/meQAAQpdcjJyA9hi6'
    },
    {
        title: '2022 August - Chicago vacay',
        link: 'https://photos.google.com/share/AF1QipPALwVvS8zbGlUiLS5-TUNPiNgLWBs0AtufrdoaUqM74a0RudLsjlYIKpckicCUZg?key=MXc1U2VsYlhpVk5RUG9lRnkwMS1RS3FOalk1Qk5R'
    },
    {
        title: '2022 - Hawaii',
        link: 'https://photos.app.goo.gl/DmyCJXr3XRiFyieu9'
    },
]

function renderPhotoLink(it) {
    return <li><a href={it.link}><p>{it.title}</p></a></li>
}

function PagePhotos() {
    return <>
        <h1>Photos</h1>
        <Container>
            {/*<p>wip photos</p>*/}

            {/*<p><a href={'https://henryfbp.github.io/photos/'}>for now see this link</a></p>*/}

            <ul>
                {photo_links.map(renderPhotoLink)}
            </ul>

        </Container>
    </>;

}

export default PagePhotos