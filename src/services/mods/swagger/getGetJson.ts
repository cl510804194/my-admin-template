/**
 * @desc 获取swagger-json
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetJson(
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<any | unknown> {
  return Request('/yyy/swagger/getJson', 'get', {}, errorHandler)
}
