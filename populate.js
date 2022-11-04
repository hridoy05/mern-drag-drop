const { readFile } = require ('fs/promises')
const dotenv = require('dotenv')
dotenv.config()

const {mongoConnect }= require('./db/connect.js')
const  Number  = require('./models/Number.model.js')

const start = async () => {
  try {
    await mongoConnect()
    await Number.deleteMany()

    const jsonProducts = JSON.parse(
      await readFile('./mock-data.json')
    )
    await Number.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()