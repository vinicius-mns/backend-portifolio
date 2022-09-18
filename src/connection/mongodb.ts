import { MongoClient } from "mongodb";

const uri = `mongodb+srv://vinicius:${process.env.PASS}@cluster0.2vla7ld.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri)

const projetos = client.db('potifolio').collection('projetos')

export default projetos
