/**
 * @desc 角色列表
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {}

export interface IParams {
  bodyParams: object
}

export function postGetRoleList(
  { bodyParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/role/getRoleList', 'post', bodyParams, errorHandler)
}
