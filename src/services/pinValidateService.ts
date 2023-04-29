import { pinValidateParams } from '../interfaces/models/params'
import { generalResponse } from '../interfaces/models/responses'
import { toPinValidateResponse } from '../utils/responses'
import { fetchServices } from './fetchServices'

export const pinValidateService = async (params: pinValidateParams): Promise<generalResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PinValidate`
  const method = 'POST'
  const body = params

  const response = toPinValidateResponse(await fetchServices(url, method, body))
  return response
}
