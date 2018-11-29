const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = [{
    entry: './index',
    mode : 'production',
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
},{
    entry: './index',
    mode : 'production',
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
        filename: 'tree-shaking-test.min.js',
        path: path.resolve(__dirname, 'test')
    },
    optimization: {
        minimizer: [new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                },
                compress: {
                    unsafe_comps: true,
                    properties: true,
                    keep_fargs: false,
                    pure_getters: true,
                    collapse_vars: true,
                    unsafe: true,
                    warnings: false,
                    sequences: true,
                    dead_code: true,
                    drop_debugger: true,
                    comparisons: true,
                    conditionals: true,
                    evaluate: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    hoist_funs: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                }
            }
        })]
    },
    node: {
        console: 'mock',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}];
