/**
 * @desc 用户详情
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 用户id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetUserDetail(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/user/getUserDetail', 'get', queryParams, errorHandler)
}
