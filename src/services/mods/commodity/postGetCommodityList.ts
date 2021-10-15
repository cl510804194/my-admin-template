/**
 * @desc 商品列表
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: object
}

export function postGetCommodityList(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/commodity/getCommodityList',
    'post',
    bodyParams,
    errorHandler
  )
}
