const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    // {
                    //     loader: 'babel-loader'
                    // },
                    {
                        loader: "ts-loader"
                    }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
