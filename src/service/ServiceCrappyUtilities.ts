export function mergeProperties(target: any, source: any): any {
    return Object.assign(target, source);
}

export function yearMonthFmt(d: Date): string {
    return (d.getUTCFullYear()) + "-" + (d.getMonth() + 1) //+ "-" + (sdate.getUTCDate());

}

export * as SomeCrappyUtilitiesClass from './ServiceCrappyUtilities'