export function homeDirAbsFmt(name: string) {
    return `/home/${name}`;
}

export function absDirsFmt(subpath: string, path: string) {
    return `/${subpath}/${path}`
}

export function homeDirFmt(text: string): string {
    return `~/${text}`
}

export function dirFmt(text: string): string {
    return `/${text}`
}

export function githubFileURLfmt(username: string, repo: string, branch: string, path: string): string {
    return `https://github.com/${username}/${repo}/tree/${branch}/${path}`
}

export * as TextFmtService from './ServiceTextFmt';