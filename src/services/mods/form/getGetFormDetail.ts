/**
 * @desc 预约表单详情
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** 预约表单id */
  id: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetFormDetail(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request('/yyy/form/getFormDetail', 'get', queryParams, errorHandler)
}
