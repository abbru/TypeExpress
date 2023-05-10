import { PinDTO } from "../interfaces/PinInterfaces";
import { PIN_GENERAL_SCHEMA } from "../schemas/PinGeneralSchema";

export class PinGeneralMapper {
    public static toQuery(query: { [key: string]: any }): PinDTO {
        try {
            const schema = PIN_GENERAL_SCHEMA;
            schema.runWithException(query);
            return {
                msisdn: query.msisdn,
                country: query.msisdn,
                carrier: query.msisdn,
                idsrv: query.msisdn,
            }
        } catch (error) {
            throw new Error("no valida la interface");
        }
    }
}