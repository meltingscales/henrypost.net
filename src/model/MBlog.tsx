import {DataBoundClass} from "./DataBoundClass";
import {ReactNode} from "react";
import {Card, Container} from "react-bootstrap";

export type TBlog = {
    posts: TBlogPost[]
}

export class MBlogPost extends DataBoundClass<TBlogPost> {

    static renderBlogPost(somePost: TBlogPost) {
        return <Container>
            <Card>
                <Card.Header>
                    {somePost.title} by {somePost.author}
                </Card.Header>
                <Card.Body>
                    {somePost.blogContent}
                </Card.Body>
            </Card>
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