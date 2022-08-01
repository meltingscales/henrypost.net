export function homeDirAbsFmt(name: string) {
    return `/home/${name}`;
}

export function absDirs(subpath:string, path:string){
    return `/${subpath}/${path}`
}

export function homeDirFmt(text: string): string {
    return `~/${text}`
}

export function  dirFmt(text:string):string{
    return `/${text}`
}

export * as TextFmtService from './TextFmtService';