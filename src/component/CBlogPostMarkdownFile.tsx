import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Markdown from "markdown-to-jsx";

var frontmatter = require('front-matter')

function CBlogPostMarkdownFile(props: any) {

    const default_file_name = 'test-post.md'

    const [post, setPost] = useState({
        attributes: {
            title: "empty title",
            date: undefined,
            tags: undefined,
        },
        body: "empty body",
    })

    useEffect(() => {

        let filename = default_file_name

        if (props.filename) {
            filename = props.filename
        }

        import(`../data/blogposts/${filename}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(
                        frontmatter(res)
                    ))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
    })

    //see https://www.npmjs.com/package/front-matter
    return (
        <Container>
            <h1>{post.attributes.title}</h1>

            {
                post.attributes.date
                    ?
                    <i>Posted on {post.attributes.date}</i>
                    :
                    null
            }

            {
                post.attributes.tags
                    ?
                    <p>Tags: <i>{(post.attributes.tags).join(', ')}</i></p>
                    :
                    null
            }

            <Markdown>
                {post.body}
            </Markdown>
        </Container>
    )
}

export default CBlogPostMarkdownFile