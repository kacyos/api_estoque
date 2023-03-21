
import express from 'express'
import 'reflect-metadata'
import { dataSource, teste } from './database'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})
teste()

app.listen(3333, async () => {
  await dataSource.initialize()
})
