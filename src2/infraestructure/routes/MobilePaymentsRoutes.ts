import express, { Request, Response } from 'express'
import { PinGeneralMapper } from '../../mappers/PinGeneralMapper'
import { pinGenerateWithParams } from '../../controllers/MobilePaymentsRestController'
import { PinDTO } from '../../interfaces/PinInterfaces'

const router = express.Router()

router
  .get('/pinGenerateWithParams', async (req: Request, res: Response) => {
    try {
      const paramsFromRequest: { [key: string]: any } = req.query
      const params: PinDTO = PinGeneralMapper.toQuery(paramsFromRequest);
      const result = await pinGenerateWithParams(params)
      return res.status(200).send(result)
    } catch (e: any) {
      return res.status(400).send({
        status: 'isError',
        message: e.message
      })
    }
  });

export default router
