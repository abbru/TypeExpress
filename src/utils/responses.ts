import { parseStatus, parseDescription, parsePinId } from './utils'
import { InfoMediaResponse, PinGenerateResponse } from '../interfaces/models/responses'

export const toPinGenerateResponse = (objectFromRequest: any): PinGenerateResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description),
    pinId: parsePinId(objectFromRequest.pinId)
  }
}

export const toPinValidateResponse = (objectFromRequest: any): InfoMediaResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description)
  }
}
