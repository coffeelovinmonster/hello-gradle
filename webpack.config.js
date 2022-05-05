const path = require('path');

module.exports = {
    entry:'./npm-app/src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};