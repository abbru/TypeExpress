import { Country, Carrier, Idsrv } from './enums'

export interface generalParams {
  msisdn: number
  country: Country
  carrier: Carrier
  idsrv: Idsrv
}
