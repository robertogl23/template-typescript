const path                   = require('path');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


/** @type {import('webpack').Configuration} */
module.exports = 
{
    entry: 
    {
        main: './app/src/index.js'
    },
    output:
    {
        path                : path.resolve(__dirname, "../dist"),
        filename            : "static/js/[name].[contenthash:8].js",
        chunkFilename       : "static/js/[name].[contenthash:8].chunk.js",
        assetModuleFilename : "static/media/[name].[hash:8][ext]",
        publicPath          : "",
    },
    module: 
    {
        rules: 
        [
            {
                test    : /\.(js|jsx)$/,
                use     : 'babel-loader',
                exclude : /node_modules/,
                resolve :
                {
                    extensions : 
                    [
                        '.js',
                        'jsx'
                    ]
                }
            },
            {
				test : /\.s[ac]ss$/i,
				use  : 
                [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ],
			},
            {
                type : "asset",
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
            },
        ]
    },
    resolve: 
    {
        extensions: 
        [
            ".js",
            ".json",
            ".jsx"
        ],
    },
    optimization: 
    {
        splitChunks: 
        {
            chunks : "all",
            name   : false,
        },
    },
    plugins: 
    [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin
        (
            {
                template : './app/public/index.html',
            }
        ),

    ]
}