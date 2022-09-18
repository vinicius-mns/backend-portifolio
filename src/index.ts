const express = require('express');
require('dotenv').config()
import projetos from './connection/mongodb';

const app = express()

import {Request, Response} from 'express'

app.get('/', (_req: Request, res: Response)=> {
  res.status(200).json({vinicius: "vinicius"})
})

app.get('/projetos', async (_req: Request, res: Response) => {
  const projeto = projetos.find()
  const x = await projeto.toArray()
  
  return res.status(200).json(x)
})

app.listen(process.env.PORT, () => {
  console.log(`rodando na port http://localhost:${process.env.PORT}`)
})