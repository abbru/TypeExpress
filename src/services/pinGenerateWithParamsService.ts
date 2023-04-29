import { fetchApi } from '../utils/utils'
import { GeneralParams } from '../interfaces/models/params'
import { InfoMediaResponse } from '../interfaces/models/responses'
import { toPinGenerateResponse } from '../utils/responses'

export const pingGenerateWithParamsService = async (params: GeneralParams): Promise<InfoMediaResponse> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  const response = toPinGenerateResponse(await fetchApi(url, method, body))
  return response
}
