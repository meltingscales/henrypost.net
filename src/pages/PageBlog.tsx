import CBlogPostMarkdownFile from "../component/CBlogPostMarkdownFile";

const postFilenames = [
    'thoughts-on-vulnerability-scanning.md',
    'flight-to-hawaii.md',
    'test-post.md',
]


const PageBlog = () => {

    return <>
        <h1>Blog</h1>

        <aside>

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

