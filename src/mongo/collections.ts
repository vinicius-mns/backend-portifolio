import { client } from './client'

const projectsCollection = client.db('portifolio').collection('projetos')
const iamCollection = client.db('portifolio').collection('iamCollection')
const userCollection = client.db('portifolio').collection('users')

export {
  projectsCollection,
  iamCollection,
  userCollection
}