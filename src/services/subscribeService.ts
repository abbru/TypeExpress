import { fetchApi } from '../utils/utils'
import { GeneralParams, PinValidateParams } from '../interfaces/models/params'
import { InfoMediaResponse } from '../interfaces/models/responses'
import { toPinGenerateResponse, toPinValidateResponse } from '../utils/responses'

export const pinGenerateWithParamsService = async (params: GeneralParams): Promise<InfoMediaResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  const response = toPinGenerateResponse(await fetchApi(url, method, body))
  return response
}

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
