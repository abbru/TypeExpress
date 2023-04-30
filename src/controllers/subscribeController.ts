import { toParamsPinValidate, toParamsGeneral } from '../utils/params'
import { pinGenerateWithParamsService, pinValidateService } from '../services/subscribeService'
import { InfoMediaResponse } from '../interfaces/models/responses'
import { GeneralParams, PinValidateParams } from '../interfaces/models/params'

export const getPinGenerateWithParams = async (paramsFromRequest: GeneralParams): Promise<InfoMediaResponse> => {
  const params = toParamsGeneral(paramsFromRequest)
  const result = await pinGenerateWithParamsService(params)
  return result
}

export const getPinValidate = async (paramsFromRequest: PinValidateParams): Promise<InfoMediaResponse> => {
  const params = toParamsPinValidate(paramsFromRequest)
  const result: InfoMediaResponse = await pinValidateService(params)
  return result
}
