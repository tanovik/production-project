import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import path from 'path';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugin';
import { buildDevServer } from './buildDevSerrver';

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
    const {paths, mode, isDev} = options;

   return {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
       
      }
}