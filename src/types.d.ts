import { Country, Carrier, Idsrv, Status } from './enums'

export interface generalParams {
  msisdn: number
  country: Country
  carrier: Carrier
  idsrv: Idsrv
}

export interface generalResponse {
  status: Status
  description: string
}

export interface pinGenerateResponse extends generalResponse {
  pinId: string
}
