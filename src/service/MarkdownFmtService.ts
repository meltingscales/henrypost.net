let asdf = 'foo'


https://gohugo.io/content-management/formats/#:~:text=Both%20HTML%20and%20Markdown%20are,Markdown%20converted%20to%20HTML
/***
 *
 * @param postContent An entire Hugo blog post.
 */
function splitHugoBlogPost(postContent: string): Array<String> {
    let splitThing = postContent.split('---\n')


    return ['todo', 'lol']
}


export * as MarkdownFmtService from './MarkdownFmtService';