import { parseMsisdn, parseCountry, parseCarrier, parseIdsrv, parsePin } from './utils'
import { GeneralParams, PinValidateParams } from '../interfaces/models/params'

export const toParamsGeneral = (objectFromRequest: any): GeneralParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv)
  }
}

export const toParamsPinValidate = (objectFromRequest: any): PinValidateParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv),
    pin: parsePin(objectFromRequest.pin)
  }
}
