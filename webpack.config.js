const path = require('path');

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'ts',
                    target: 'ES2022',
                }
            }
        ]
    },
    entry: './src/index.ts',
    output: {
        filename: 'geckoTokens.umd.min.js',
        path: path.resolve(__dirname, './lib'),
        library: 'geckoTokens',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            ajv: false,
        },
    },
};

module.exports = [
    config,
    {
        ...config,
        output: {
            filename: 'geckoTokens.umd.js',
            path: path.resolve(__dirname, './lib'),
            library: 'geckoTokens',
            libraryTarget: 'umd'
        },
        optimization: {
            minimize: false,
        },
    }
]