var webpack = require('webpack');
var path = require("path");

module.exports = {

    debug: true,

    entry: {
        'alfresco-js-api': './main.js',
        'alfresco-js-api.min': './main.js'
    },

    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    // correct
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [
                /(node_modules|grunt|test)/,
                path.resolve(__dirname, 'Gruntfile.js')
            ],
            loader: 'babel',
            query: {
                presets: ['es2015-loose'],
                plugins: ['transform-es2015-block-scoping',
                    ['transform-es2015-classes', {loose: true}],
                    'transform-proto-to-assign']
            }
        }]
    },

    output: {
        library: 'AlfrescoApi',
        libraryTarget: 'umd',
        path: './dist',
        filename: '[name].js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
};
