// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// app.listen(3000)

// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.listen(3000)

const express = require('express')
const app = express()

// reversed the order of the 'get' and 'use' methods
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(express.static('public'))

app.listen(8080)