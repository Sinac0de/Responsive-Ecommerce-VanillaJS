const path = require('path');

module.exports = {
    entry: "src/js/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
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
};