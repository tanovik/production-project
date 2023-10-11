import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildResolvers } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugin'
import { buildDevServer } from './buildDevSerrver'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            //
            publicPath: '/'
        },
        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined

    }
}
