import * as dotenv from 'dotenv'
import express from 'express'
import pinGenerateWithParamsRouter from './routes/pinGenerateWithParams'
import pinValidateRouter from './routes/pinValidate'

dotenv.config()

const app = express()

app.get('/', function (_req, res) {
  res.send('Hola Juan Carlo, Que haces chupa pija?')
})

app.use('/infomedia/pinGenerateWithParams', pinGenerateWithParamsRouter)

app.use('/infomedia/pinValidate', pinValidateRouter)

app.listen(3000)

console.log('Server on port', 3000)

export default app
