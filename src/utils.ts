import { Carrier, Country, Idsrv } from './enums'
import { generalParams } from './types'

const isNumber = (number: number): boolean => {
  return typeof number !== 'number'
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isCountry = (string: any): boolean => {
  return Object.values(Country).includes(string)
}

const isCarrier = (string: any): boolean => {
  return Object.values(Carrier).includes(string)
}

const isIdsrv = (number: number): boolean => {
  return Idsrv.includes(number)
}

const parseMsisdn = (msisdnFromRequest: any): number => {
  if (!isNumber(msisdnFromRequest)) {
    throw new Error('Incorrect or missing country')
  }
  return msisdnFromRequest
}

const parseCountry = (countryFromRequest: any): Country => {
  if (!isString(countryFromRequest) || !isCountry(countryFromRequest)) {
    throw new Error('Incorrect or missing country')
  }
  return countryFromRequest
}

const parseCarrier = (carrierFromRequest: any): Carrier => {
  if (!isString(carrierFromRequest) || !isCarrier(carrierFromRequest)) {
    throw new Error('Incorrect or missing carrier')
  }
  return carrierFromRequest
}

const parseIdsrv = (idsrvFromRequest: any): number => {
  if (!isNumber(idsrvFromRequest) && !isIdsrv(idsrvFromRequest)) {
    throw new Error('Incorrect or missing idsrv')
  }
  return idsrvFromRequest
}

export const toParamsGeneral = (objectFromRequest: any): generalParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv)
  }
}
