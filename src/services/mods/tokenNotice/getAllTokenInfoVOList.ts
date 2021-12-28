/**
 * @desc 上币通知接口
 */
import { AxiosResponse } from 'axios';
import Request from '@/utils/request';

export class IQueryParams {}

export interface IParams {
  bodyParams: defs.TokenOnCurrencyDataObjects;
}

export function getAllTokenInfoVOList(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void,
): Promise<defs.ReturnsADataObject<void> | unknown> {
  return Request('/api/addToken', 'post', bodyParams, errorHandler);
}
