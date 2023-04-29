import { Status } from '../enums'

export interface InfoMediaResponse {
  status: Status
  description: string
  pinId?: string
}

export interface PinGenerateResponse extends InfoMediaResponse {
  pinId: string
}
