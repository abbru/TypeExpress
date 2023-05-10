import { InfoMedia, PinDTO } from "../interfaces/PinInterfaces";
import { MobilePaymentServices } from "../services/MobilePaymentServices";

export const pinGenerateWithParams = async (params: PinDTO): Promise<InfoMedia> => {
    const mobilePaymentServices: MobilePaymentServices = new MobilePaymentServices();
    return mobilePaymentServices.pinGenerateWithParams(params);
}