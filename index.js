require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 5000


server.use('*', (req, res) => {
    res.send('<h1>Hello, there!</h1>')
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})