/**
 * @desc 新建商品
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: defs.def8
}

export function postAddCommodity(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/commodity/addCommodity',
    'post',
    bodyParams,
    errorHandler
  )
}
