import { parseMsisdn, parseCountry, parseCarrier, parseIdsrv } from './utils'
import { generalParams } from '../types'

export const toParamsGeneral = (objectFromRequest: any): generalParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv)
  }
}
