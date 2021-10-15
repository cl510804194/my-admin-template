/**
 * @desc 删除商品
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

export function deleteDeleteCommodity(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/commodity/deleteCommodity',
    'delete',
    queryParams,
    errorHandler
  )
}
