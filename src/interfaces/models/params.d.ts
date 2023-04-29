import { Country, Carrier, Idsrv } from '../enums'

export interface GeneralParams {
  msisdn: number
  country: Country
  carrier: Carrier
  idsrv: Idsrv
}

export interface PinValidateParams extends GeneralParams {
  pin: string
}
