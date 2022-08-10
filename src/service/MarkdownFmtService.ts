//https://gohugo.io/content-management/formats/#:~:text=Both%20HTML%20and%20Markdown%20are,Markdown%20converted%20to%20HTML

/***
 *
 * @param postContent An entire Hugo blog post.
 */
export function splitHugoBlogPost(postContent: string): Array<String> {

    const SIZE = 3
    const MARKER = '---\n'


    let splitThing = postContent.split(MARKER)

    console.log(splitThing)

    if (splitThing.length !== SIZE) {
        throw new Error(`Error! We should see ${SIZE - 1} markers in ${splitThing}`)
    }

    if (splitThing[0] !== '') {
        throw new Error(`Error! We should see an empty 0th item in ${splitThing}`)
    }

    return [splitThing[1], splitThing[2]]
}


export * as MarkdownFmtService from './MarkdownFmtService';