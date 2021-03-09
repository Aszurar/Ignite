const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
//configuração do plugin html
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        //Por padrão é lido apenas arquivos js, mas também 
        //teremos arquivos jsx, definimos assim para também
        //aceitar jsx
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
            //configurar o plugin para executar o bundle.js no index.html
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, // verifica se o arquivo é jsx ou não
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
}