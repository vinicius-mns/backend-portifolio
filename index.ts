import express from 'express'
require('dotenv').config()

const app = express()

app.get('/', (_req, res)=> {
  res.status(200).json({ok: "funcionou"})
})

app.listen(process.env.PORT, () => {
  console.log(`rodando na port http://localhost:${process.env.PORT}`)
})