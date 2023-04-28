import { fetchServices } from './fetchServices'
import { generalParams, generalResponse } from '../types'
import { toPinGenerateResponse } from '../utils'

export const pingGenerateWithParamsService = async (params: generalParams): Promise<generalResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  const response = toPinGenerateResponse(await fetchServices(url, method, body))
  return response
}
