const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//configuração do plugin html
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        //Por padrão é lido apenas arquivos js, mas também 
        //teremos arquivos jsx, definimos assim para também
        //aceitar jsx
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        //Se estiver em desenvolvimento o plugin acima vai ser executado, se não,
        // a linha acima será false, e o filter desse array de plugins irá remover esse
        //valor booleano
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
            //configurar o plugin para executar o bundle.js no index.html
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, // verifica se o arquivo é jsx ou tsx ou não
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
                }
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