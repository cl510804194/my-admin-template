/**
 * @desc 获取小程序类目
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** openid */
  openid: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetCategory(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/template/getCategory', 'get', queryParams, errorHandler)
}
