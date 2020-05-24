module.exports = {
    entry: ['@babel/polyfill' ,'./src/main.js'], //arquivo principal do JS
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js', // arquivo onde fica configuração do babel, que não reconhecem EcmaScript
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}