/**
 * @desc 删除应用
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 应用id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function deleteDeleteApp(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/app/deleteApp', 'delete', queryParams, errorHandler)
}
