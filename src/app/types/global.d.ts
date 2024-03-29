declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

type DeepPartialType<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartialType<T[P]>
    }
    : T
type OptionalRecordType<K extends keyof any, T> = {
    [P in K]?: T
}
