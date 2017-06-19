var webpack = require('webpack');
var path = require("path");

module.exports = {

    output: {
        library: 'AlfrescoApi',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },

    entry: {
        'alfresco-js-api': './main.js',
        'alfresco-js-api.min': './main.js'
    },

    // correct
    module: {
        loaders: [{
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
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],

    node: {
        console: 'mock',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
