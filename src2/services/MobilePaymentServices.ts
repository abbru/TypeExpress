import { ApiGateway } from "../gateways/ApiGateway";
import { RedisRepository } from "../infraestructure/Repository/RedisRepository";
import { InfoMedia, InfomediaPinGenerateBodyDTO, PinDTO } from "../interfaces/PinInterfaces";

export class MobilePaymentServices {
    redisRepository: RedisRepository;
    apiGateway: ApiGateway
    constructor() {
        this.redisRepository = new RedisRepository();
        this.apiGateway = new ApiGateway();
    }

    async pinGenerateWithParams(params: PinDTO): Promise<InfoMedia> {
        //TODO REDIS
        const body: InfomediaPinGenerateBodyDTO = await this.redisRepository.getParamsToGeneratePin(params);
        return this.apiGateway.generatePin(body);
    }
}