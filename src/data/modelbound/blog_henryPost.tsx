import {TBlog} from "../../model/MBlog";
import {Container} from "react-bootstrap";


export default function HENRY_TBLOG_DATA(): TBlog {
    var daBlog = {
        posts: [
            {
                author: "Henry Post",
                blogContent: (
                    <Container>
                        {/*<p>bro im on a plane!!!! wow!!!!!</p>*/}
                        <p>Going to see a friend from my childhood, a good friend of my late mom - Jet Dee. Can't wait. Will update this blog more after I land.</p>

                        <p>
                            Update: It was pretty good. Been awake for 36 hours...and caught the Plymouth Brockton bus with about 30 seconds to spare.
                        </p>
                        <p>
                            I'll probably update this later... I would just ramble about something random if I wrote more.
                        </p>
                        <p>
                            What I really should do is figure out how to make the functionality of "view only post tagged with X". I might need to ask David K the best way to do this.
                        </p>
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