import { Carrier, Country, Idsrv, Status } from '../enums'

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

export const parseMsisdn = (msisdnFromRequest: any): number => {
  if (!isNumber(msisdnFromRequest)) {
    throw new Error('Incorrect or missing country')
  }
  return msisdnFromRequest
}

export const parseCountry = (countryFromRequest: any): Country => {
  if (!isString(countryFromRequest) || !isCountry(countryFromRequest)) {
    throw new Error('Incorrect or missing country')
  }
  return countryFromRequest
}

export const parseCarrier = (carrierFromRequest: any): Carrier => {
  if (!isString(carrierFromRequest) || !isCarrier(carrierFromRequest)) {
    throw new Error('Incorrect or missing carrier')
  }
  return carrierFromRequest
}

export const parseIdsrv = (idsrvFromRequest: any): number => {
  if (!isNumber(idsrvFromRequest) && !isIdsrv(idsrvFromRequest)) {
    throw new Error('Incorrect or missing idsrv')
  }
  return idsrvFromRequest
}

export const parseStatus = (statusFromRequest: any): Status => {
  if (!isString(statusFromRequest) && !isStatus(statusFromRequest)) {
    throw new Error('Incorrect or missing status')
  }
  return statusFromRequest
}

export const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error('Incorrect or missing description')
  }
  return descriptionFromRequest
}

export const parsePinId = (pinIdFromRequest: any): string => {
  if (!isNumber(pinIdFromRequest)) {
    throw new Error('Incorrect or missing pinId')
  }
  return pinIdFromRequest
}
