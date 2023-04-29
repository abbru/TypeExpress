import { parseStatus, parseDescription, parsePinId } from './utils'
import { pinGenerateResponse } from '../types'

export const toPinGenerateResponse = (objectFromRequest: any): pinGenerateResponse => {
  return {
    status: parseStatus(objectFromRequest.status),
    description: parseDescription(objectFromRequest.description),
    pinId: parsePinId(objectFromRequest.pinId)
  }
}
