import { Carrier, Country, Idsrv, Status } from './enums'
import { generalParams, pinGenerateResponse } from './types'

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

const isStatus = (string: any): boolean => {
  return Object.values(Status).includes(string)
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

const parseStatus = (statusFromRequest: any): Status => {
  if (!isString(statusFromRequest) && !isStatus(statusFromRequest)) {
    throw new Error('Incorrect or missing status')
  }
  return statusFromRequest
}

const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error('Incorrect or missing description')
  }
  return descriptionFromRequest
}

const parsePinId = (pinIdFromRequest: any): string => {
  if (!isNumber(pinIdFromRequest)) {
    throw new Error('Incorrect or missing pinId')
  }
  return pinIdFromRequest
}

export const toParamsGeneral = (objectFromRequest: any): generalParams => {
  return {
    msisdn: parseMsisdn(objectFromRequest.msisdn),
    country: parseCountry(objectFromRequest.country),
    carrier: parseCarrier(objectFromRequest.carrier),
    idsrv: parseIdsrv(objectFromRequest.idsrv)
  }
}

export const toPinGenerateResponse = (objectFromRequest: any): pinGenerateResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description),
    pinId: parsePinId(objectFromRequest.pinId)
  }
}
