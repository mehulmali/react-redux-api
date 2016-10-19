/**
 * Created by User on 10/19/2016.
 */
import path from 'path';

export default{
    devtool: 'eval-source-map',
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
}
