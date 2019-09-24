declare module 'json5' {
    export type JSONReplacer = (
        key: string,
        value: any,
    ) => any | (number | string)[] | null

    export function parse(
        text: string,
        reviver?: (key: any, value: any) => any,
    ): any
    // Old JSON methods
    export function stringify(
        value: any,
        replacer?: (key: string, value: any) => any,
        space?: string | number,
    ): string
    export function stringify(
        value: any,
        replacer?: (number | string)[] | null,
        space?: string | number,
    ): string

    // New JSON5 stringify function
    export function stringify(
        value: any,
        options?: {
            space?: number | string
            quote?: string
            replacer?: JSONReplacer
        },
    ): string

    const JSON5: { stringify: typeof stringify; parse: typeof parse }
    export default JSON5
}
