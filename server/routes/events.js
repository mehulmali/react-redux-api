/**
 * Created by User on 10/19/2016.
 */

import express from 'express';
import authenticate  from '../middlewares/authenticate';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
    res.status(201).json({success: true});

});

export default router;