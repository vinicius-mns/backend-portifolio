import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = `mongodb+srv://vinicius:${process.env.PASS}@cluster0.2vla7ld.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri)

export {
  client
}