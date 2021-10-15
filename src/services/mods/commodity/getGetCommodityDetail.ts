/**
 * @desc 商品详情
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 商品id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetCommodityDetail(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/commodity/getCommodityDetail',
    'get',
    queryParams,
    errorHandler
  )
}
