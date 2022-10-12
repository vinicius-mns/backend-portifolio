import client from "./mongodb";

const projectsCollection = client.db('portifolio').collection('projetos')
const iamCollection = client.db('portifolio').collection('iamCollection')
const usersCollection = client.db('portifolio').collection('users')

export {
  projectsCollection,
  iamCollection,
  usersCollection
}