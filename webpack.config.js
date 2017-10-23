//nodeJS提供path模块来处理文件和路径
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var proxy = require('http-proxy-middleware');

let DEV = process.env.NODE_ENV === 'DEV'; //开发模式
let PROD = process.env.NODE_ENV === 'PROD'; //生成模式

let entry = PROD 
    ?   [
            './src/index.js'
        ]
    :   [
            './src/index.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ];

var plugins = PROD
    ? [
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: true,
        //     mangle: false,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ExtractTextPlugin('style.css'),
    ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            DEVELOPMENT: JSON.stringify(DEV),
            PRODUCTION: JSON.stringify(PROD)
        }),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
      ];

var cssIdentName = PROD ? '[hash:base64:10]' : '[path][name]-[local]-[hash:base64:24]';

var cssLoader = PROD
    ?       ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: 'css-loader?localIdentName=' + cssIdentName
    })
    :       ['style-loader', 'css-loader?localIdentName=' + cssIdentName];

//webpack配置文件项
module.exports = {
    devtool: "source-map",
    //入口文件
    entry: entry,
    //输出打包的文件
    output: {
        //打包文件名
        filename: 'bundle.js',
        //bundle.js输出路径,是一个绝对路径
        path: path.join(__dirname, 'dist'),
        //在html页面中需要的导入资源的路径
        publicPath: '/dist/',
        chunkFilename: "[name].[hash:8].chunk.js"
    },
    plugins: plugins,
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ['import', [{libraryName: 'antd', style: true}]],
                        ["transform-object-rest-spread"],
                        ["transform-decorators-legacy"],
                    ],
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(jpg|gif|png)$/,
                exclude: '/node_modules/',
                // loader: 'file-loader'
                loader: 'url-loader?limit=512&name=[path][name].[ext]?[hash]',
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                loader: cssLoader,
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader?{modifyVars:{"@primary-color":"#1478e3"}}'
             },
        ]
    },
    resolve:{
        modules: [
            "node_modules",
            path.join(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css", "less", ".gif"],
    },
    devServer: {
        hot: true,
        publicPath: '/dist/',
        stats: {
            colors: true
        },
        inline: true,
        proxy: {
            '/BFDS/': {
                target: 'http://192.168.2.38:8080',
                changeOrigin: true,
                secure: false,
            }
        },
    },
    performance: {
        hints: false,
    },
};