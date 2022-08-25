import {TBlog} from "../../model/MBlog";
import {Container} from "react-bootstrap";


export default function HENRY_TBLOG_DATA(): TBlog {
    var daBlog = {
        posts: [
            {
                author: "Henry Post",
                blogContent: (
                    <Container>
                        <p>bro im on a plane!!!! wow!!!!!</p>
                        <p>Going to see a friend from my childhood, a good friend of my late mom - Jet Dee. Can't wait. Will update this blog more after I land.</p>
                    </Container>
                ),
                date: new Date('2022-08-25'),
                tags: [
                    'casual',
                ],
                title: "Flight to Hawaii",
            },
            {
                author: "Henry Post",
                blogContent: (
                    <Container>
                        <p>test - really old post</p>
                    </Container>
                ),
                date: new Date('2021-01-01'),
                tags: ['test'],
                title: "test for date sorting of posts"
            }
        ]
    }

    //TODO: Collect data from old markdown blog - using Github API.
    // @ts-ignore
    daBlog.posts.push(...[])

    return daBlog
}