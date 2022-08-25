import {DataBoundClass} from "./DataBoundClass";
import {ReactNode, useState} from "react";
import {Button, Card, Container} from "react-bootstrap";
import {ServiceCrappyUtilities} from "../service/ServiceCrappyUtilities"

export type TBlog = {
    posts: TBlogPost[]
}

export class MBlogPost extends DataBoundClass<TBlogPost> {

    static renderBlogPost(somePost: TBlogPost) {

        // const [shownTag, setShownTag] = useState<null | string>(null);
        //TODO I can't run the above line, I need to research `useState` when I have internet.

        return <Container>
            <Card>
                <Card.Header>
                    <Card.Title>
                        "{somePost.title}" by {somePost.author}
                    </Card.Title>
                    <Card.Subtitle>
                        Posted on {ServiceCrappyUtilities.yearMonthDayFmt(somePost.date)}
                        <hr/>
                        <Container>
                            {MBlogPost.renderTags(somePost)}
                        </Container>
                    </Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    {somePost.blogContent}
                </Card.Body>
            </Card>
        </Container>;
    }

    private static renderTags(somePost: TBlogPost) {

        function toggleTag(tag: string) {
            alert("TODO: toggle tag " + tag)
            //TODO: I need to look up how to do this online, maybe
            //      use "useEffect" or something...idk
        }

        return <Container>
            <span>Tags:</span>
            <ul>
                {somePost.tags.map((tag) => {
                    return <>
                        <Button onClick={() => toggleTag(tag)}>
                            {tag}
                        </Button>
                    </>
                })}
            </ul>
        </Container>;
    }
}

export type TBlogPost = {
    date: Date,
    blogContent: string | ReactNode
    title: string
    author: string
    tags: string[]
}

export class MBlog extends DataBoundClass<TBlog> {

    static renderBlog(blogData: TBlog) {
        return <Container>

            {
                blogData.posts.map((it) => {
                    return MBlogPost.renderBlogPost(it);
                })
            }

        </Container>
    }

}