const express = require('express')
const cors = require('cors')
const {
  createPerson,
  listActors,
  listAllPerson,
  listBestActors,
  listDirectors,
  listProducers,
  listScreenwriters,
} = require('./Models/Person/service')
const { createAward, listAward } = require('./Models/Award/service')
const { createEdition, listEdition } = require('./Models/Edition/service')
const { createEvent, listEvent } = require('./Models/Event/service')
const {
  createMovie,
  listMovie,
  listMostAwardedMovies,
  listMostGrossingMovies,
} = require('./Models/Movie/service')
const { createMovieAward } = require('./Models/MovieAward/service')
const { createPersonAward, listMostAwardedPerson } = require('./Models/PersonAward/service')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/edicao', listEdition)
app.get('/evento', listEvent)
app.get('/filme', listMovie)
app.get('/filme/mais_premiados', listMostAwardedMovies)
app.get('/filme/maior_arrecadacao', listMostGrossingMovies)
app.get('/pessoa', listAllPerson)
app.get('/pessoa/atores', listActors)
app.get('/pessoa/diretores', listDirectors)
app.get('/pessoa/mais_premiadas', listMostAwardedPerson)
app.get('/pessoa/melhores_atores', listBestActors)
app.get('/pessoa/produtores', listProducers)
app.get('/pessoa/roteiristas', listScreenwriters)
app.get('/premio', listAward)
app.post('/edicao', createEdition)
app.post('/evento', createEvent)
app.post('/filme_premiacao', createMovieAward)
app.post('/filme', createMovie)
app.post('/pessoa_premiacao', createPersonAward)
app.post('/pessoa', createPerson)
app.post('/premio', createAward)

app.listen(3030, () => {
    console.log('Server listening on port 3030')
})
