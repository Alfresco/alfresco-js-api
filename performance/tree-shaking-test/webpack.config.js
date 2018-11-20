const path = require('path');

module.exports = {
    entry: './index',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, 'test']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'tree-shaking-test.js',
        path: path.resolve(__dirname, 'test')
    },
    optimization: {
        minimize: false
    }
};
