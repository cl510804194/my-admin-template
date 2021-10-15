/**
 * @desc 获取信息
 */
import { AxiosResponse } from 'axios'
import Request from '@/utils/request'

export class IQueryParams {
  /** openid */
  openid: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getGetTemplateList(
  { queryParams }: IParams = {} as IParams,
  errorHandler?: (error: AxiosResponse<ResponseData>) => void
): Promise<object | unknown> {
  return Request(
    '/yyy/template/getTemplateList',
    'get',
    queryParams,
    errorHandler
  )
}
