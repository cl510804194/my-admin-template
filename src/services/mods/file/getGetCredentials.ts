/**
 * @desc 获取临时密钥
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetCredentials(
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/file/getCredentials', 'get', {}, errorHandler)
}
