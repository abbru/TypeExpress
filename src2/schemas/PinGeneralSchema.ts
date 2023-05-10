import { Decoder, object, string, number, oneOf, constant, optional } from "@mojotech/json-type-validation";
import { Carrier, Country, PinFullDTO } from "../interfaces/PinInterfaces";

export const PIN_GENERAL_SCHEMA: Decoder<PinFullDTO> = object({
    msisdn: string(),
    country: oneOf(
        constant(Country.ae),
        constant(Country.bh),
        constant(Country.ca),
        constant(Country.gb),
        constant(Country.iq),
        constant(Country.kw),
        constant(Country.sa),
        constant(Country.us),
    ),
    carrier: oneOf(
        constant(Carrier.du),
        constant(Carrier.ee),
        constant(Carrier.etisalat),
        constant(Carrier.mobily),
        constant(Carrier.o2),
        constant(Carrier.ooredoo),
        constant(Carrier.stc),
        constant(Carrier.tel),
        constant(Carrier.three),
        constant(Carrier.verizon),
        constant(Carrier.vodafone),
        constant(Carrier.zain),
    ),
    idsrv: number(),
    pin: optional(string()),
})