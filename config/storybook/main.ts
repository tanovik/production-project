import { buildCssLoader } from 'config/build/loaders/buildCssLoader'
import { type Configuration, DefinePlugin } from 'webpack'
import path from 'path'

export default {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false
            }
        },
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        'storybook-addon-mock',
        'storybook-addon-themes'

    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: ''
        }
        config.resolve!.modules!.push(paths.src)
        config.resolve!.extensions!.push('.ts', '.tsx')
        config.resolve!.alias = {
            ...config.resolve!.alias,
            '@': paths.src
        }

        // @ts-expect-error
        config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })

        config.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
        config.module!.rules.push(buildCssLoader(true))

        config.plugins!.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook')
        }))
        // Return the altered config
        return config
    }
}
