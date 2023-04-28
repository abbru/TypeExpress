import express from 'express'
import { pingGenerateWithParamsService } from '../services/pinGenerateWithParamsService'
import { toParamsGeneral } from '../utils'
import { StatusCodeEnum } from '../enums'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const params = toParamsGeneral(req.query)
    console.log(params)
    const result = pingGenerateWithParamsService(params)
    res.status(200).send(result)
  } catch (e: any) {
    res.status(400).send({
      status: 'isError',
      code: StatusCodeEnum.BadRequest,
      message: e.message
    })
  }
})

export default router
