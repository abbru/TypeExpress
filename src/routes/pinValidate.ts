import express from 'express'
import { toParamsPinValidate } from '../utils/params'
import { pinValidateService } from '../services/pinValidateService'
import { StatusCodeEnum } from '../interfaces/enums'

const router = express.Router()

router.get('/', (async (req, res) => {
  try {
    const params = toParamsPinValidate(req.query)
    const result = await pinValidateService(params)
    return res.status(200).send(result)
  } catch (e: any) {
    return res.status(400).send({
      status: 'isError',
      code: StatusCodeEnum.BadRequest,
      message: e.message
    })
  }
}) as express.RequestHandler)

export default router
