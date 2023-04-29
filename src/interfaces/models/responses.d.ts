import { Status } from '../enums'

export interface ResponseInfoMedia {
  status: Status
  description: string
  pinId?: string
}

export interface PinGenerateResponse extends ResponseInfoMedia {
  pinId: string
}
