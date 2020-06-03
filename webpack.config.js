const path = require('path');

module.exports = {
    entry: './index.js',

    output: {
        filename: 'donot.js',
        library : 'donot',
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

    watch: true,

    devtool : 'source-map'
};