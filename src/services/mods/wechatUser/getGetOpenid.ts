/**
 * @desc code解析openid
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 微信code */
  code: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetOpenid(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/applet/getOpenid', 'get', queryParams, errorHandler)
}
