import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/user', async (_req, res) => {
  return res.status(200).json({message: 'ok'})
})

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`)
})