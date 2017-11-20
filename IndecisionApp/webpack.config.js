const path = require('path');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            //run babel for js files but ignore node_modules folder
            //the presets are defined in .babelrc
            exclude: /node_modules/
        }]
    },
    //error display
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname, 'public'),
    }
};
//run babel loader for files ending with .js and if they are not in node_modules
