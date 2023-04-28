import { fetchServices } from './fetchServices'
import { generalParams } from '../types'

export const pingGenerateWithParamsService = async (params: generalParams): Promise<object> => {
  if (process.env.API_URL === undefined) {
    throw new Error('API_URL is not defined')
  }
  const url = `${process.env.API_URL}PINGenerateWithParams`
  const method = 'POST'
  const body = params

  return await fetchServices(url, method, body)
}
