const express = require('express');
const Recipes = require('./recipes-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ meessage: 'api is working'})
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        checkpoint: "You made it to the last middleware!",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;