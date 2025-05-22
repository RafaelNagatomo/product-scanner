import express from 'express'
import dotenv from 'dotenv'
import { helloCore } from '@core/index'
import { helloDb } from '@db/index'

dotenv.config()
const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json())

helloCore();
helloDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})
