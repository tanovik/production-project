import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import { type BuildOptions } from 'typescript'
import type webpack from 'webpack'

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean
}

export function buildBabelLoader ({ isDev, isTsx }: BuildBabelLoaderProps): webpack.RuleSetRule {
// export function buildBabelLoader (isDev: boolean): webpack.RuleSetRule {
    const isProd = !isDev
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                cacheDirectory: true,
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx
                        }
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ],
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}
