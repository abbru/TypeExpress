import { Status } from '../enums'

export interface GeneralResponse {
  status: Status
  description: string
}

export interface PinGenerateResponse extends GeneralResponse {
  pinId: string
}
