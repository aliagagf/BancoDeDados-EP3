const express = require('express')

const controller = require('./Query/select')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/pessoa', controller.getAllPerson)

app.listen(3030, () => {
    console.log('Server listening on port 3030')
})
