export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function mergeProperties(target: any, source: any): any {
    return Object.assign(target, source);
}

export function yearMonthFmt(d: Date): string {
    return (d.getUTCFullYear()) + "-" + (d.getMonth() + 1) //+ "-" + (sdate.getUTCDate());
}

export function yearMMMonthFmt(d: Date): string {
    const m = MONTH_NAMES[(d.getMonth())].slice(0, 3)

    return m + " " + (d.getUTCFullYear())
}

export function yearMonthDayFmt(d: Date): string {
    return yearMonthFmt(d) + "-" + d.getUTCDay()
}

function yearFmt(d) {
    return "" + d.getUTCFullYear()
}

export function dateRangeYearFmt(d1, d2): string {
    if (!d1 && !d2) {
        return ""
    }

    if (!d1) {
        return yearFmt(d2)
    }

    if (!d2) {
        return yearFmt(d1)
    }

    return `${yearFmt(d1)} - ${yearFmt(d2)}`

}

export function dateRangeYearMMMonthFmt(d1: Date, d2: Date): string {
    if (!d1 && !d2) {
        return ""
    }

    if (!d1) {
        return yearMMMonthFmt(d2)
    }

    if (!d2) {
        return yearMMMonthFmt(d1)
    }

    return `${yearMMMonthFmt(d1)} - ${yearMMMonthFmt(d2)}`
}

/**
 * When you need 2 dates to be rendered in YYYY-MM format.
 */
export function dateRangeYearMonthFmt(d1: Date, d2: Date): string {
    if (!d1 && !d2) {
        return ""
    }

    if (!d1) {
        return yearMonthFmt(d2)
    }

    if (!d2) {
        return yearMonthFmt(d1)
    }

    return `${yearMonthFmt(d1)} - ${yearMonthFmt(d2)}`
}

export * as ServiceCrappyUtilities from './ServiceCrappyUtilities'