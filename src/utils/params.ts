import { parseMsisdn, parseCountry, parseCarrier, parseIdsrv, parsePin } from './utils'
import { generalParams, pinValidateParams } from '../interfaces/models/params'

export const toParamsGeneral = (objectFromRequest: any): generalParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv)
  }
}

export const toParamsPinValidate = (objectFromRequest: any): pinValidateParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv),
    pin: parsePin(objectFromRequest.pin)
  }
}
