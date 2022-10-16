import { client } from './client'

const usersCollection = client.db('portifolio').collection('users')

export {
  usersCollection
}