import express from 'express'
import cors from 'cors'
import routes from './routes'

console.log('server running')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3331)