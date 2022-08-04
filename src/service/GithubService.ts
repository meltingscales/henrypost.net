import GithubZenResponse from "../model/GithubZenResponse";

const SAMPLE_URL = 'https://github.com/HenryFBP/henryfbp.github.io/tree/master/content/posts'
const GH_BASE_API_URL = 'https://api.github.com'


//https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api
export async function fetchGithubZenResponse(): Promise<GithubZenResponse> {
    const response = await fetch(GH_BASE_API_URL + '/zen')
    const data = await response.text()

    return new GithubZenResponse(response, data)
}

export async function fetchGithubProfile(uname: string): Promise<Response> {
    return await fetch(`${GH_BASE_API_URL}/users/${uname}`)
}

export async function fetchGithubRepoContents(owner: string, repo: string, path?: string) {
    if (path) {
        return await fetch(`${GH_BASE_API_URL}/repos/${owner}/${repo}/contents/${path}`)
    }
    return await fetch(`${GH_BASE_API_URL}/repos/${owner}/${repo}/contents/`)
}


export * as GithubService from './GithubService';