/**
 * @desc token数据列表
 */
import { AxiosResponse } from 'axios';
import Request from '@/utils/request';

export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams;
}

export function getAllTokenInfoVOList(
  errorHandler?: (error: AxiosResponse<ResponseData>) => void,
): Promise<defs.ReturnsADataObject<Array<defs.InformationOnCurrency>> | unknown> {
  return Request('/api/getTokenList', 'get', {}, errorHandler);
}
