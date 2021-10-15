/**
 * @desc 删除权限
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 权限id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteDeleteAuth(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/auth/deleteAuth', 'delete', queryParams, errorHandler)
}
