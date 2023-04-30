import express, { RequestHandler } from 'express'
import { StatusCodeEnum } from '../interfaces/enums'
import { getPinGenerateWithParams, getPinValidate } from '../controllers/mobilePaymentsController'
import { GeneralParams, PinValidateParams } from '../interfaces/models/params'

const router = express.Router()

router
  .get('/pinGenerateWithParams', (async (req, res) => {
    try {
      const paramsFromRequest = req.query as unknown as GeneralParams
      const result = await getPinGenerateWithParams(paramsFromRequest)
      return res.status(200).send(result)
    } catch (e: any) {
      return res.status(400).send({
        status: 'isError',
        code: StatusCodeEnum.BadRequest,
        message: e.message
      })
    }
  }) as RequestHandler)

  .get('/pinValidate', (async (req, res) => {
    try {
      const paramsFromRequest = req.query as unknown as PinValidateParams
      const result = await getPinValidate(paramsFromRequest)
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
