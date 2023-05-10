import { InfomediaPinGenerateBodyDTO, PinDTO } from "../../interfaces/PinInterfaces";

export class RedisRepository {

    async getParamsToGeneratePin(query: PinDTO): Promise<InfomediaPinGenerateBodyDTO> {
        return {
            "mx": "971504615118",
            "mcc": "424",
            "mnc": "2",
            "productId": 91000493,
            "u": "Media Digital SA",
            "p": "g3bvx%UbwjF",
            "params": [
                {
                    "key": "amount",
                    "value": "3.25"
                },
                {
                    "key": "frequency",
                    "value": "day"
                },
                {
                    "key": "language",
                    "value": query.country
                },
                {
                    "key": "description",
                    "value": "Media Games"
                }
            ]
        }
    }
}