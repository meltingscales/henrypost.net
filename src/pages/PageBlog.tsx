import CBlogPostMarkdownFile from "../component/CBlogPostMarkdownFile";

const POSTS = [
    <CBlogPostMarkdownFile filename={'applying-for-robinhood-2022.md'}/>,
    // <CBlogPostMarkdownFile filename={'like-a-product-owner-in-the-headlights.md'}/>,
    <CBlogPostMarkdownFile filename={'flight-to-hawaii.md'}/>,
    <CBlogPostMarkdownFile filename={'test-post.md'}/>,
]

const PageBlog = () => {

    return <>
        <h1>Blog</h1>

        <aside>
            <a href={'https://henryfbp.github.io/posts/'}>Please click here for my old blog.</a>

            <p>Also...yes, this is currently one big ugly page. Adding other pages will come later, hehe.</p>
        </aside>

        <hr/>

        {POSTS.map(it => {
            return (
                <>
                    {it}
                    <hr/>
                </>
            )
        })}

    </>;
}

export default PageBlog

