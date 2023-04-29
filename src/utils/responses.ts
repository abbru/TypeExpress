import { parseStatus, parseDescription, parsePinId } from './utils'
import { generalResponse, pinGenerateResponse } from '../interfaces/models/responses'

export const toPinGenerateResponse = (objectFromRequest: any): pinGenerateResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description),
    pinId: parsePinId(objectFromRequest.pinId)
  }
}

export const toPinValidateResponse = (objectFromRequest: any): generalResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description)
  }
}
