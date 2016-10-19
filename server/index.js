/**
 * Created by User on 10/19/2016.
 */

import express from 'express';
import path from 'path';

let app = express();
let port = 3000;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log('App running on localhost:3000'));