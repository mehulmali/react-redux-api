/**
 * Created by User on 10/19/2016.
 */

import path from 'path';
import webpack from 'webpack';

export default{
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    node:{
        net: 'empty',
        dns: 'empty'
    }
}
