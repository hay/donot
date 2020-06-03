const path = require('path');

module.exports = {
    entry: './index.js',

    output: {
        filename: 'donot.js',
        library : 'donot',
        libraryTarget : 'umd',
        globalObject : 'this',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    devtool : 'source-map'
};