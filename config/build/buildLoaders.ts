import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const cssLoaders = buildCssLoader(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const babelLoader = buildBabelLoader(isDev)
    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: ['@babel/preset-env'],
    //             plugins: [
    //                 [
    //                     'i18next-extract',
    //                     {
    //                         locales: ['ru', 'en'],
    //                         keyAsDefaultValue: true
    //                     }
    //                 ],
    //                 isDev && require.resolve('react-refresh/babel')
    //             ].filter(Boolean)
    //         }
    //     }
    // }
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders
    ]
}
