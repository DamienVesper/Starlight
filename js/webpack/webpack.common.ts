import * as path from 'path';

import * as Webpack from 'webpack';

import CopyPlugin from 'copy-webpack-plugin';

const config: Webpack.Configuration = {
    entry: {
        forum: path.resolve(__dirname, `../forum.js`),
        admin: path.resolve(__dirname, `../admin.js`)
    },
    plugins: [
        new Webpack.ProgressPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, `../../node_modules/bubbly-bg/dist/bubbly-bg.js`),
                    to: path.resolve(__dirname, `../assets/bubbly-bg.js`)
                }
            ]
        })
    ],
    resolve: {
        extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `.json`]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: `ts-loader`,
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: `babel-loader`,
                options: {
                    presets: [`@babel/preset-react`, `@babel/preset-typescript`, [
                        `@babel/preset-env`, {
                            modules: false,
                            loose: true
                        }
                    ]],
                    plugins: [
                        [`@babel/plugin-transform-runtime`, { useESModules: true }],
                        [`@babel/plugin-proposal-class-properties`, { loose: true }],
                        [`@babel/plugin-proposal-private-methods`, { loose: true }],
                        [`@babel/plugin-transform-react-jsx`, {
                            pragma: `m`,
                            pragmaFrag: `'['`,
                            useBuiltIns: true
                        }]
                    ]
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: `asset/resource`
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: `asset/resource`
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, `../dist`),
        devtoolNamespace: `@the-turk/flarum-stargazing-theme`,

        library: `module.exports`,
        libraryTarget: `assign`
    },
    externals: [
        {
            [`@flarum/core/forum`]: `flarum.core`,
            [`@flarum/core/admin`]: `flarum.core`,
            jquery: `jQuery`
        }
    ]
};

export default config;
