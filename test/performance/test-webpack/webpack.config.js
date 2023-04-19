/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
                exclude: [/node_modules/, path.resolve(__dirname, 'test')]
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
                exclude: [/node_modules/, path.resolve(__dirname, 'test')]
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
