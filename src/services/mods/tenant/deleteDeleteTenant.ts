/**
 * @desc 删除租户
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 租户id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteDeleteTenant(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/tenant/deleteTenant',
    'delete',
    queryParams,
    errorHandler
  )
}
