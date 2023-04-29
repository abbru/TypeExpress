import express, { RequestHandler } from 'express'
import { pingGenerateWithParamsService } from '../services/pinGenerateWithParamsService'
import { toParamsGeneral } from '../utils/params'
import { StatusCodeEnum } from '../interfaces/enums'

const router = express.Router()

router.get('/', (async (req, res) => {
  try {
    const params = toParamsGeneral(req.query)
    const result = await pingGenerateWithParamsService(params)
    return res.status(200).send(result)
  } catch (e: any) {
    return res.status(400).send({
      status: 'isError',
      code: StatusCodeEnum.BadRequest,
      message: e.message
    })
  }
}) as RequestHandler)

export default router
