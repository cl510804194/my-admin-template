/**
 * @desc 编辑权限
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: object
}

export function postEditAuth(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/auth/editAuth', 'post', bodyParams, errorHandler)
}
