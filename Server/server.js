const express = require('express')
const cors = require('cors')
const { createPerson } = require('./Models/Person/service')
const { createEvent, listEvent } = require('./Models/Event/service')
const { createEdition, listEdition } = require('./Models/Edition/service')
const { createAward } = require('./Models/Award/service')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/edicao', createEdition)
app.post('/evento', createEvent)
app.post('/pessoa', createPerson)
app.post('/premio', createAward)
app.get('/edicao', listEdition)
app.get('/evento', listEvent)

app.listen(3030, () => {
    console.log('Server listening on port 3030')
})
