const express = require('express');
require('dotenv').config()

const app = express()

import {Request, Response} from 'express'

app.get('/', (_req: Request, res: Response)=> {
  res.status(200).json({ok: "funcionando"})
})

app.listen(process.env.PORT, () => {
  console.log(`rodando na port http://localhost:${process.env.PORT}`)
})