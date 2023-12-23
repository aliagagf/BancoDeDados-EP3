const db = require('../../DataBase/db')
const convertStringToYear = require('../../Utils/convertStringToYear')
const convertStringToDate = require('../../Utils/convertStringToDate')

const handleCreatePremiereLocation = (res, data) => {
  const insertQuery = `
    INSERT INTO "local_estreia_filme"(
      local_estreia,
      filme_titulo_original,
      filme_ano_producao
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.premiereLocation,
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  db.query(insertQuery, insertValues, (err) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
  })
}

const handleCreateIsDirector = (res, data) => {
  const insertQuery = `
    INSERT INTO "eh_diretor"(
      filme_titulo_original,
      filme_ano_producao,
      diretor_nome_art,
      eh_principal
    )
    VALUES ($1, $2, $3, $4);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  db.query(
    insertQuery,
    [...insertValues, data.mainDirector.nome_art, true],
    (err) => {
      if (err) {
        console.log(err)
        res.status(500).json(err)
        return
      }
    }
  )

  data.directors.forEach(director => {
    db.query(
      insertQuery,
      [...insertValues, director.nome_art, false],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      }
    )
  })
}

const handleCreateIsProducer = (res, data) => {
  const insertQuery = `
    INSERT INTO "eh_produtor"(
      filme_titulo_original,
      filme_ano_producao,
      produtor_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  data.producers.forEach(producer => {
    db.query(
      insertQuery,
      [...insertValues, producer.nome_art],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      }
    )
  })
}

const handleCreateIsScreenwriter = (res, data) => {
  const insertQuery = `
    INSERT INTO "eh_roteirista"(
      filme_titulo_original,
      filme_ano_producao,
      roteirista_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  data.screenwriters.forEach(screenwriter => {
    db.query(
      insertQuery,
      [...insertValues, screenwriter.nome_art],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      }
    )
  })
}

const handleCreateMainActors = (res, data) => {
  const insertQuery = `
    INSERT INTO "ator_princ"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  data.mainActors.forEach(actor => {
    db.query(
      insertQuery,
      [...insertValues, actor.nome_art],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      }
    )
  })
}

const handleCreateCastActors = (res, data) => {
  const insertQuery = `
    INSERT INTO "ator_elenco"(
      filme_titulo_original,
      filme_ano_producao,
      ator_nome_art
    )
    VALUES ($1, $2, $3);
  `

  const insertValues = [
    data.originalTitle,
    convertStringToYear(data.productionYear),
  ]

  data.castActors.forEach(actor => {
    db.query(
      insertQuery,
      [...insertValues, actor.nome_art],
      (err) => {
        if (err) {
          console.log(err)
          res.status(500).json(err)
          return
        }
      }
    )
  })
}

const createMovie = async (req, res) => {
  let insertMovieResult

  const insertQuery = `
    INSERT INTO "filme"(
      titulo_original,
      ano_producao,
      data_estreia,
      titulo_no_brasil,
      classe,
      idioma_original,
      arrecadacao_prim_ano,
      tipo
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
  `

  const insertValues = [
    req.body.originalTitle,
    convertStringToYear(req.body.productionYear),
    convertStringToDate(req.body.launchDate),
    req.body.brazilianTitle,
    req.body.genre,
    req.body.originalTitle,
    req.body.firstYearFund,
    req.body.type,
  ]

    db.query(insertQuery, insertValues, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json(err)
        return
      }

      insertMovieResult = result
    }) 

    handleCreatePremiereLocation(res, req.body)
    handleCreateIsDirector(res, req.body)
    handleCreateIsProducer(res, req.body)
    handleCreateIsScreenwriter(res, req.body)
    handleCreateMainActors(res, req.body)
    handleCreateCastActors(res, req.body)
  
    res.status(200).json(insertMovieResult)
}

const listMovie = (req, res) => {
  const listQuery = `
    SELECT *
    FROM "filme"
  `

  db.query(listQuery, [], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).json(err)
      return
    }
    
    res.status(200).json(result.rows)
  })
}

module.exports = {
  createMovie,
  listMovie,
}
