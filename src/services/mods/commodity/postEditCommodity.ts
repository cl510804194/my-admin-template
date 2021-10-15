/**
 * @desc 编辑商品
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: defs.def9
}

export function postEditCommodity(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/commodity/editCommodity',
    'post',
    bodyParams,
    errorHandler
  )
}
