import { fetchServices } from './fetchServices'
import { GeneralParams } from '../interfaces/models/params'
import { ResponseInfoMedia } from '../interfaces/models/responses'
import { toPinGenerateResponse } from '../utils/responses'

export const pingGenerateWithParamsService = async (params: GeneralParams): Promise<ResponseInfoMedia> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  const response = toPinGenerateResponse(await fetchServices(url, method, body))
  return response
}
