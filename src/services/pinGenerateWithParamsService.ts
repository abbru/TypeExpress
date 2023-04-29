import { fetchServices } from './fetchServices'
import { generalParams } from '../interfaces/models/params'
import { pinGenerateResponse } from '../interfaces/models/responses'
import { toPinGenerateResponse } from '../utils/responses'

export const pingGenerateWithParamsService = async (params: generalParams): Promise<pinGenerateResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  const response = toPinGenerateResponse(await fetchServices(url, method, body))
  return response
}
