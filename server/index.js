/**
 * Created by User on 10/19/2016.
 */

import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const port = 3000;
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('App running on localhost:3000'));