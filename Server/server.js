const express = require('express')
const cors = require('cors')
const { createPerson } = require('./Models/Person')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/pessoa', createPerson)

app.listen(3030, () => {
    console.log('Server listening on port 3030')
})
