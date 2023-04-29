import { Status } from '../enums'

export interface generalResponse {
  status: Status
  description: string
}

export interface pinGenerateResponse extends generalResponse {
  pinId: string
}
