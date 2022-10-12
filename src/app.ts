const express = require('express');
import { Router } from "express";
const cors = require('cors')

require('dotenv').config()

class App {
  app: express.Application

  constructor(){
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors({origin: ['https://vinicius-mns.github.io', 'http://localhost:3000']}))
  }

  public startServer() {
    this.app.listen(process.env.PORT, () => {
      console.log(`rodando na port http://localhost:${process.env.PORT}`)
    })
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}

export default App