/**
 * @desc 删除用户
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

export function deleteDeleteUser(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/user/deleteUser', 'delete', queryParams, errorHandler)
}
