import * as dotenv from 'dotenv'
import express from 'express'
import mobilePaymentsRoutes from './routes/mobilePaymentsRoutes'

dotenv.config()

const app = express()

app.get('/', function (_req, res) {
  res.send('Hola Juan Carlo, Que haces chupa pija?')
})

app.use('/infomedia/', mobilePaymentsRoutes)

app.listen(3000)

console.log('Server on port', 3000)

export default app
