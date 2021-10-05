const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try{
        res.status(200).send({ success: 'Authenticated user' })
    } catch(err){
        res.status(401).send({ error: 'Unauthenticated user' })
    }
});

module.exports = app => app.use('/verification', router);
