const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'epApi',
  password: '1234',
  port: '5433',
})

client.connect()

module.exports = client
