const express = require('express');
// import express from 'express'
import { Router } from "express";

require('dotenv').config()

class App {
  app: express.Application

  constructor(){
    this.app = express()
    this.app.use(express.json())
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