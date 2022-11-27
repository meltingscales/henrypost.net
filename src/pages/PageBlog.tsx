import CBlogPostMarkdownFile from "../component/CBlogPostMarkdownFile";

const postFilenames = [
    // 'moral-panic.md',
    // 'adhd-sucks.md',
    // 'thanksgiving-2022.md',
    // 'like-a-product-owner-in-the-headlights.md',
    'flight-to-hawaii.md',
    'test-post.md',
]


const PageBlog = () => {

    return <>
        <h1>Blog</h1>

        <aside>
            <a href={'https://henryfbp.github.io/posts/'}>Please click here for my old blog.</a>

            <p>Also...yes, this is currently one big ugly page. Adding other pages will come later, hehe.</p>

            <p>TODO: Allow people to filter by post category. Not sure how to do that. Probably steal some logic from
                the books page.</p>
        </aside>

        <hr/>

        {postFilenames.map(filename => {
            return (
                <>
                    <CBlogPostMarkdownFile filename={filename}/>
                    <hr/>
                </>
            )
        })}

    </>;
}

export default PageBlog

