var webpack = require('webpack');
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var myRules = [{
    test: /\.js$/,
    exclude: [
        /(node_modules|grunt|test)/,
        path.resolve(__dirname, 'Gruntfile.js')
    ],
    loader: 'babel-loader',
    query: {
        presets: ['es2015-loose'],
        plugins: ['transform-es2015-block-scoping',
            ['transform-es2015-classes', {loose: true}],
            'transform-proto-to-assign']
    }
}, {
    test: /\.(js|css)$/,
    loader: 'remove-comments-loader'
}]

module.exports = [{

    mode: 'production',

    entry: {
        'alfresco-js-api.min': './main.js'
    },

    output: {
        library: 'AlfrescoApi',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
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
            })
        ]
    },

    // correct
    module: {
        rules: myRules
    },

    node: {
        console: 'mock',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}, {

    entry: {
        'alfresco-js-api': './main.js',
    },

    optimization: {
        minimize: false,
    },

    output: {
        library: 'AlfrescoApi',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },

    // correct
    module: {
        rules: myRules
    },

    node: {
        console: 'mock',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}];
