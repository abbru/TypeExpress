import { PinValidateParams } from '../interfaces/models/params'
import { InfoMediaResponse } from '../interfaces/models/responses'
import { toPinValidateResponse } from '../utils/responses'
import { fetchApi } from '../utils/utils'

export const pinValidateService = async (params: PinValidateParams): Promise<InfoMediaResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PinValidate`
  const method = 'POST'
  const body = params

  const response = toPinValidateResponse(await fetchApi(url, method, body))
  return response
}
