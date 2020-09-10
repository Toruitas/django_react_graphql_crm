const path = require('path');

module.exports = {

    entry: [path.resolve(__dirname, 'frontend/src/index.js')],
    output: {
        path: path.resolve(__dirname, "frontend/static/frontend/public/"),
        publicPath: "/static/frontend/public/",
        filename: 'main.js',  // the same one we import in index.html
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)?$/,
                exclude:  /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env", "@babel/preset-react"]}
                },
            },
            {
                test: /\.(png|jp?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }

        ],
    },
};