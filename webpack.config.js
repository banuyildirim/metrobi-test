//webpack.config.js

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
            }
            }
        ]
    },
    devServer: {
        inline: false,
        port: 3000
    }
};