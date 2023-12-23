const express = require('express')
const cors = require('cors')
const {
  createPerson,
  listActors,
  listAllPerson,
  listDirectors,
  listProducers,
  listScreenwriters,
} = require('./Models/Person/service')
const { createAward, listAward } = require('./Models/Award/service')
const { createMovie, listMovie } = require('./Models/Movie/service')
const { createEdition, listEdition } = require('./Models/Edition/service')
const { createEvent, listEvent } = require('./Models/Event/service')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/edicao', listEdition)
app.get('/evento', listEvent)
app.get('/filme', listMovie)
app.get('/pessoa', listAllPerson)
app.get('/pessoa/atores', listActors)
app.get('/pessoa/diretores', listDirectors)
app.get('/pessoa/produtores', listProducers)
app.get('/pessoa/roteiristas', listScreenwriters)
app.get('/premio', listAward)
app.post('/edicao', createEdition)
app.post('/evento', createEvent)
app.post('/filme', createMovie)
app.post('/pessoa', createPerson)
app.post('/premio', createAward)

app.listen(3030, () => {
    console.log('Server listening on port 3030')
})
