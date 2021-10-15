/**
 * @desc 删除角色
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 角色id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteDeleteRole(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/role/deleteRole', 'delete', queryParams, errorHandler)
}
