export function homeDirFmt(text: string): string {
    return `~/${text}`
}

export function  dirFmt(text:string):string{
    return `/${text}`
}

export * as TextFmtService from './TextFmtService';