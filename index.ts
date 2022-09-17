import express from 'express'

const app = express()

app.get('/', (_req, res)=> {
  res.status(200).json({ok: "funcionou"})
})

app.listen(3001, () => {
  console.log(`rodando na port http://localhost:3001`)
})