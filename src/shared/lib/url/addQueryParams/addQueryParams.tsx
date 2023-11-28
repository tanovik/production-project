export function getQueryParams (params: OptionalRecordType<string, string>): string {
    const searchParams = new URLSearchParams(window.location.search)
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value)
        }
    })
    return `?${searchParams.toString()}`
}

/**
 * Function which adds params to query string
 */

export function addQueryParams (params: OptionalRecordType<string, string>): void {
    window.history.pushState(null, '', getQueryParams(params))
}
